import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';
import ParticipantsSidebar from '../../components/ParticipantsSidebar';
import KickModal from '../../components/KickModal';
import KickedModal from '../../components/KickedModal';
import DrawingCanvas from '../../components/DrawingCanvas';

const POLL_INTERVAL = 2000; // 2 seconds - faster updates for better UX

const RoomPage = () => {
  const router = useRouter();
  const { roomId, username: queryUsername } = router.query;
  const [room, setRoom] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [questionInput, setQuestionInput] = useState('');
  const [posting, setPosting] = useState(false);
  const [isHost, setIsHost] = useState(false);
  const [answer, setAnswer] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<any[]>([]);
  const [fetchingAnswers, setFetchingAnswers] = useState(false);
  const [answersLoaded, setAnswersLoaded] = useState(false);
  const [readyForNextQuestion, setReadyForNextQuestion] = useState(false);
  const [hasSavedAnswer, setHasSavedAnswer] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [fetchingUsers, setFetchingUsers] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [kickModal, setKickModal] = useState<{ isOpen: boolean; targetUserId: string; username: string }>({
    isOpen: false,
    targetUserId: '',
    username: ''
  });
  const [hasBeenKicked, setHasBeenKicked] = useState(false);
  const [answerMode, setAnswerMode] = useState<'text' | 'drawing'>('text');
  const [drawingData, setDrawingData] = useState<any>(null);

  // Ensure a userId is present in localStorage
  const getOrCreateUserId = () => {
    let userId = localStorage.getItem('study-userId');
    if (!userId) {
      userId = nanoid(12);
      localStorage.setItem('study-userId', userId);
    }
    return userId;
  };

  // Fetch room data (with loading state)
  const fetchRoom = useCallback(async () => {
    if (!roomId || typeof roomId !== 'string') return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/room/${roomId}`);
      if (!res.ok) throw new Error('Room not found');
      const data = await res.json();
      setRoom(data);
      setQuestionInput(data.question || '');
      setRevealed(!!data.revealed);
      // Check if current user is host
      if (typeof window !== 'undefined') {
        const userId = localStorage.getItem('study-userId');
        setIsHost(userId && data.hostId && userId === data.hostId);
      }
    } catch (err) {
      setError('Room not found.');
    } finally {
      setLoading(false);
    }
  }, [roomId]);

  // Poll room data (without loading state)
  const pollRoom = useCallback(async () => {
    if (!roomId || typeof roomId !== 'string') return;
    try {
      const res = await fetch(`/api/room/${roomId}`);
      if (!res.ok) return; // Don't set error for polling
      const data = await res.json();
      
      // Only update room state if there are actual changes
      setRoom((prevRoom: any) => {
        if (prevRoom?.question !== data.question || prevRoom?.revealed !== data.revealed) {
          return data;
        }
        return prevRoom;
      });
      
      // Only update question input if it's empty and we're not ready for next question
      if (!readyForNextQuestion) {
        setQuestionInput(prev => prev || data.question || '');
      }
      
      // Only update revealed state if it changed
      setRevealed(prev => {
        if (prev !== !!data.revealed) {
          return !!data.revealed;
        }
        return prev;
      });
      
      // Check if current user is host
      if (typeof window !== 'undefined') {
        const userId = localStorage.getItem('study-userId');
        setIsHost(userId && data.hostId && userId === data.hostId);
      }
    } catch (err) {
      // Silently fail for polling
    }
  }, [roomId]);

  // Fetch answers (with loading state)
  const fetchAnswers = useCallback(async () => {
    if (!roomId || typeof roomId !== 'string') return;
    setFetchingAnswers(true);
    try {
      const res = await fetch(`/api/room/${roomId}/answers`);
      if (!res.ok) throw new Error('Failed to fetch answers');
      const data = await res.json();
      console.log('Fetched answers:', data);
      setAnswers(data);
      setAnswersLoaded(true);
    } catch (err) {
      // Optionally set error
    } finally {
      setFetchingAnswers(false);
    }
  }, [roomId]);

  // Poll answers (without loading state)
  const pollAnswers = useCallback(async () => {
    if (!roomId || typeof roomId !== 'string') return;
    try {
      const res = await fetch(`/api/room/${roomId}/answers`);
      if (!res.ok) return; // Don't set error for polling
      const data = await res.json();
      console.log('Polled answers:', data);
      setAnswers(data);
    } catch (err) {
      // Silently fail for polling
    }
  }, [roomId]);

  // Fetch users (with loading state)
  const fetchUsers = useCallback(async () => {
    if (!roomId || typeof roomId !== 'string') return;
    setFetchingUsers(true);
    try {
      console.log('Fetching users for room:', roomId);
      const res = await fetch(`/api/room/${roomId}/users`);
      if (!res.ok) throw new Error('Failed to fetch users');
      const data = await res.json();
      console.log('Fetched users:', data);
      setUsers(data);
    } catch (err) {
      console.error('Failed to fetch users:', err);
    } finally {
      setFetchingUsers(false);
    }
  }, [roomId]);

  // Poll users (without loading state)
  const pollUsers = useCallback(async () => {
    if (!roomId || typeof roomId !== 'string' || hasBeenKicked) return;
    try {
      const res = await fetch(`/api/room/${roomId}/users`);
      if (!res.ok) return; // Don't set error for polling
      const data = await res.json();
      console.log('Polled users:', data);
      setUsers(data);
      
      // Check if current user has been kicked
      const currentUserId = getOrCreateUserId();
      const isUserStillInRoom = data.some((user: any) => user.userId === currentUserId);
      if (!isUserStillInRoom && data.length > 0) {
        // User has been kicked, show kicked modal
        setHasBeenKicked(true);
      }
    } catch (err) {
      console.error('Failed to poll users:', err);
    }
  }, [roomId, hasBeenKicked]);

  // Join room as user
  const joinRoom = useCallback(async () => {
    if (!roomId || typeof roomId !== 'string' || !username || hasBeenKicked) return;
    const userId = getOrCreateUserId();
    try {
      console.log('Joining room:', { roomId, userId, username });
      
      // First check if room exists
      const roomCheck = await fetch(`/api/room/${roomId}`);
      if (!roomCheck.ok) {
        console.log('Room does not exist yet, will retry later');
        return; // Don't throw error, just return and let polling handle it
      }
      
      const res = await fetch(`/api/room/${roomId}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, username }),
      });
      if (!res.ok) throw new Error('Failed to join room');
      console.log('Successfully joined room');
    } catch (err) {
      console.error('Failed to join room:', err);
    }
  }, [roomId, username, hasBeenKicked]);

  // Update user's lastSeen (heartbeat)
  const updateUserHeartbeat = useCallback(async () => {
    if (!roomId || typeof roomId !== 'string' || !username || hasBeenKicked) return;
    const userId = getOrCreateUserId();
    try {
      console.log('Sending heartbeat:', { roomId, userId, username });
      await fetch(`/api/room/${roomId}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, username }),
      });
    } catch (err) {
      console.error('Heartbeat failed:', err);
    }
  }, [roomId, username, hasBeenKicked]);

  // Use refs to store stable references to the fetch functions
  const fetchRoomRef = useRef(fetchRoom);
  const pollRoomRef = useRef(pollRoom);
  const fetchAnswersRef = useRef(fetchAnswers);
  const pollAnswersRef = useRef(pollAnswers);
  const fetchUsersRef = useRef(fetchUsers);
  const pollUsersRef = useRef(pollUsers);
  const updateUserHeartbeatRef = useRef(updateUserHeartbeat);
  
  // Update refs when functions change
  useEffect(() => {
    fetchRoomRef.current = fetchRoom;
  }, [fetchRoom]);
  
  useEffect(() => {
    pollRoomRef.current = pollRoom;
  }, [pollRoom]);
  
  useEffect(() => {
    fetchAnswersRef.current = fetchAnswers;
  }, [fetchAnswers]);
  
  useEffect(() => {
    pollAnswersRef.current = pollAnswers;
  }, [pollAnswers]);
  
  useEffect(() => {
    fetchUsersRef.current = fetchUsers;
  }, [fetchUsers]);
  
  useEffect(() => {
    pollUsersRef.current = pollUsers;
  }, [pollUsers]);
  
  useEffect(() => {
    updateUserHeartbeatRef.current = updateUserHeartbeat;
  }, [updateUserHeartbeat]);

  // Single polling mechanism using stable refs
  useEffect(() => {
    if (!roomId || typeof roomId !== 'string' || hasBeenKicked) return;
    
    // Initial fetch
    fetchRoomRef.current();
    
    // Set up polling only if POLL_INTERVAL > 0
    if (POLL_INTERVAL > 0) {
      const interval = setInterval(() => {
        pollRoomRef.current();
      }, POLL_INTERVAL);
      
      // Also check for immediate updates every 500ms (but less frequently when revealed)
      const fastInterval = setInterval(() => {
        const lastUpdate = localStorage.getItem(`room-${roomId}-updated`);
        if (lastUpdate) {
          const updateTime = parseInt(lastUpdate);
          const now = Date.now();
          // If update is recent (within last 5 seconds), poll immediately
          if (now - updateTime < 5000) {
            pollRoomRef.current();
          }
        }
      }, revealed ? 2000 : 500); // Slower polling when answers are revealed
      
      return () => {
        clearInterval(interval);
        clearInterval(fastInterval);
      };
    }
  }, [roomId]); // Only depend on roomId

  // Separate effect for users polling
  useEffect(() => {
    if (!roomId || typeof roomId !== 'string') return;
    
    // Initial fetch with loading state
    fetchUsersRef.current();
    
    // Set up polling only if POLL_INTERVAL > 0
    if (POLL_INTERVAL > 0) {
      const interval = setInterval(() => {
        pollUsersRef.current();
      }, POLL_INTERVAL);
      
      return () => clearInterval(interval);
    }
  }, [roomId, hasBeenKicked]); // Depend on roomId and kicked state

  // Separate effect for answers polling
  useEffect(() => {
    if (!roomId || typeof roomId !== 'string') return;
    
    // If there's a question, fetch answers to show status (both before and after reveal)
    if (room?.question) {
      // Initial fetch with loading state
      fetchAnswersRef.current();
      
      // Set up polling only if POLL_INTERVAL > 0
      if (POLL_INTERVAL > 0) {
        const interval = setInterval(() => {
          pollAnswersRef.current();
        }, POLL_INTERVAL);
        
        return () => clearInterval(interval);
      }
    }
  }, [roomId, room?.question, hasBeenKicked]); // Depend on roomId, question, and kicked state

  // Username logic
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (typeof queryUsername === 'string' && queryUsername) {
        setUsername(queryUsername);
        localStorage.setItem('study-username', queryUsername);
      } else {
        const stored = localStorage.getItem('study-username');
        if (stored) setUsername(stored);
      }
    }
  }, [queryUsername]);

  // Join room when username is available
  useEffect(() => {
    console.log('Join room effect triggered:', { username, roomId, hasUsername: !!username, hasRoomId: !!roomId });
    if (username && roomId && typeof roomId === 'string') {
      // Try to join immediately
      joinRoom();
      
      // If room doesn't exist yet, retry every 1 second for up to 15 seconds
      let retryCount = 0;
      const maxRetries = 15; // 15 seconds total
      
      const retryInterval = setInterval(async () => {
        retryCount++;
        console.log(`Retry attempt ${retryCount} to join room`);
        
        try {
          // Check if room exists
          const roomCheck = await fetch(`/api/room/${roomId}`);
          if (roomCheck.ok) {
            console.log('Room now exists, joining...');
            joinRoom();
            clearInterval(retryInterval);
          } else if (retryCount >= maxRetries) {
            console.log('Max retries reached, stopping');
            clearInterval(retryInterval);
          }
        } catch (err) {
          console.error('Error checking room:', err);
          if (retryCount >= maxRetries) {
            clearInterval(retryInterval);
          }
        }
              }, 1000);
      
      return () => clearInterval(retryInterval);
    }
  }, [username, roomId, joinRoom, hasBeenKicked]);

  // Heartbeat to update user's lastSeen
  useEffect(() => {
    if (!username || !roomId || typeof roomId !== 'string') return;
    
    // Send heartbeat every 30 seconds
    const heartbeatInterval = setInterval(() => {
      updateUserHeartbeatRef.current();
    }, 30000);
    
    return () => clearInterval(heartbeatInterval);
  }, [username, roomId, hasBeenKicked]);

  // Track previous question to detect changes (for non-hosts)
  const [previousQuestion, setPreviousQuestion] = useState<string | null>(null);
  
  // Detect question changes and reset saved answer state for non-hosts
  useEffect(() => {
    if (!roomId || typeof roomId !== 'string' || isHost) return;
    
    // If question changed and we had a saved answer, reset it
    if (room?.question !== previousQuestion && previousQuestion !== null) {
      setHasSavedAnswer(false);
      // Clear the local answer for this user
      setAnswers(prev => prev.filter(a => a.userId !== getOrCreateUserId()));
    }
    
    // If question was reset to null (Next Question clicked), reset everything
    if (room?.question === null && previousQuestion !== null) {
      setHasSavedAnswer(false);
      setRevealed(false);
      setAnswers([]);
      setAnswersLoaded(false);
    }
    
    // Update previous question
    setPreviousQuestion(room?.question || null);
  }, [room?.question, roomId, isHost, previousQuestion]);

  // Post question (host only)
  const handlePostQuestion = async () => {
    if (!roomId || typeof roomId !== 'string') return;
    setPosting(true);
    try {
      const res = await fetch(`/api/room/${roomId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          question: questionInput,
          revealed: false // Reset revealed state when posting new question
        }),
      });
      if (!res.ok) throw new Error('Failed to post question');
      
      // Update local state immediately to avoid blinking
      setRoom((prev: any) => ({ 
        ...prev, 
        question: questionInput,
        revealed: false 
      }));
      setQuestionInput(''); // Clear the input
      setRevealed(false); // Reset revealed state
      setAnswers([]); // Clear answers for new question
      setAnswersLoaded(false); // Reset answers loaded state
      setReadyForNextQuestion(false); // Reset ready state
      setHasSavedAnswer(false); // Reset saved answer state for new question
      
      // Notify other users immediately
      localStorage.setItem(`room-${roomId}-updated`, Date.now().toString());
    } catch (err) {
      alert('Failed to post question.');
    } finally {
      setPosting(false);
    }
  };

  // Save answer
  const handleSaveAnswer = async () => {
    if (!roomId || typeof roomId !== 'string') return;
    
    // Validate input based on mode
    if (answerMode === 'text' && !answer.trim()) return;
    if (answerMode === 'drawing' && !drawingData) return;
    
    setSaving(true);
    setSaved(false);
    const userId = getOrCreateUserId();
    try {
      const res = await fetch(`/api/room/${roomId}/answers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          userId, 
          username: username || 'Anonymous', 
          text: answerMode === 'text' ? answer : 'Drawing answer',
          drawingData: answerMode === 'drawing' ? drawingData : null
        }),
      });
      if (!res.ok) throw new Error('Failed to save answer');
      
      // Update local state immediately to avoid blinking
      const newAnswer = {
        id: Date.now().toString(), // Temporary ID
        roomId,
        userId,
        username: username || 'Anonymous',
        text: answerMode === 'text' ? answer : 'Drawing answer',
        drawingData: answerMode === 'drawing' ? drawingData : null,
        timestamp: new Date(),
        revealed: false
      };
      setAnswers(prev => [...prev, newAnswer]);
      setSaved(true);
      setHasSavedAnswer(true); // Mark that user has saved an answer
      setTimeout(() => setSaved(false), 2000);
      
      // Clear the inputs
      setAnswer('');
      setDrawingData(null);
      
      // Notify other users immediately
      localStorage.setItem(`room-${roomId}-updated`, Date.now().toString());
    } catch (err) {
      alert('Failed to save answer.');
    } finally {
      setSaving(false);
    }
  };

  // Check if everyone has answered
  const everyoneHasAnswered = () => {
    if (!room?.question || users.length === 0) return false;
    
    // Get all users except the host (host doesn't need to answer)
    const nonHostUsers = users.filter(user => user.userId !== room.hostId);
    if (nonHostUsers.length === 0) return true; // Only host in room
    
    // Check if all non-host users have answered
    return nonHostUsers.every(user => 
      answers.some(answer => answer.userId === user.userId) // Use user.userId (localStorage ID) since API now returns this
    );
  };

  // Reveal answers (host only)
  const handleRevealAnswers = async () => {
    if (!roomId || typeof roomId !== 'string') return;
    
    // Check if everyone has answered
    if (!everyoneHasAnswered()) {
      alert('Please wait for everyone to answer before revealing.');
      return;
    }
    
    try {
      const res = await fetch(`/api/room/${roomId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ revealed: true }),
      });
      if (!res.ok) throw new Error('Failed to reveal answers');
      
      // Update local state immediately to avoid blinking
      setRoom((prev: any) => ({ ...prev, revealed: true }));
      setRevealed(true);
      
      // Clear the question input field after revealing
      setQuestionInput('');
      
      // Notify other users immediately
      localStorage.setItem(`room-${roomId}-updated`, Date.now().toString());
    } catch (err) {
      alert('Failed to reveal answers.');
    }
  };

  // Kick user (host only)
  const handleKickUser = async (targetUserId: string, username: string) => {
    setKickModal({ isOpen: true, targetUserId, username });
  };

  const handleKickConfirm = async () => {
    if (!roomId || typeof roomId !== 'string') return;
    
    try {
      const res = await fetch(`/api/room/${roomId}/kick`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          hostId: getOrCreateUserId(),
          targetUserId: kickModal.targetUserId
        }),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Failed to kick user');
      }
      
      // The user will be removed from the database, and polling will update the UI
      console.log('User kicked successfully');
      
      // Close the modal
      setKickModal({ isOpen: false, targetUserId: '', username: '' });
    } catch (err: any) {
      alert(`Failed to kick user: ${err.message}`);
      setKickModal({ isOpen: false, targetUserId: '', username: '' });
    }
  };

  const handleKickCancel = () => {
    setKickModal({ isOpen: false, targetUserId: '', username: '' });
  };

  // Next question button (host only)
  const handleNextQuestion = async () => {
    if (!roomId || typeof roomId !== 'string') return;
    
    try {
      // Update the database to reset to initial state
      const res = await fetch(`/api/room/${roomId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          question: null, // Clear the question
          revealed: false // Reset revealed state
        }),
      });
      if (!res.ok) throw new Error('Failed to reset room');
      
      // Update local state immediately
      setReadyForNextQuestion(true);
      setQuestionInput(''); // Clear any existing input
      setHasSavedAnswer(false); // Reset saved answer state for all users
      setRevealed(false); // Reset revealed state
      setAnswers([]); // Clear revealed answers
      setAnswersLoaded(false); // Reset answers loaded state
      
      // Update room state to reset to initial state
      setRoom((prev: any) => ({ 
        ...prev, 
        question: null, // Clear the question
        revealed: false // Reset revealed state
      }));
      
      // Notify other users to reset their state
      localStorage.setItem(`room-${roomId}-updated`, Date.now().toString());
    } catch (err) {
      alert('Failed to reset room.');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
        <div>Loading room...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-600">
        <div className="text-xl font-bold mb-2">{error}</div>
        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded" onClick={() => router.push('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-200 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white shadow-2xl rounded-2xl p-8 flex flex-col gap-8">
              {/* Header with Room ID and Mobile Sidebar Toggle */}
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block bg-indigo-100 text-indigo-700 font-mono text-xs px-3 py-1 rounded-full shadow-sm border border-indigo-200">Room ID: {roomId}</span>
                  <button
                    onClick={() => {
                      if (typeof roomId === 'string') {
                        navigator.clipboard.writeText(roomId);
                      // Optional: Show a brief toast or change button appearance
                      const button = event?.target as HTMLButtonElement;
                      if (button) {
                        const originalText = button.innerHTML;
                        button.innerHTML = `
                          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        `;
                        button.classList.add('text-green-600');
                        setTimeout(() => {
                          button.innerHTML = originalText;
                          button.classList.remove('text-green-600');
                        }, 1000);
                      }
                    }
                  }}
                    className="p-1 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded transition-colors"
                    title="Copy Room ID to clipboard"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <button
                  className="lg:hidden p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </button>
              </div>
              {/* Welcome */}
              <div className="text-center mb-2">
                <h1 className="text-3xl font-extrabold text-gray-800">Welcome{username ? `, ${username}` : ''}!</h1>
                <div className="text-gray-500 text-base mt-1">Collaborate and study together in real time.</div>
              </div>
              {/* Study Question Section */}
              <div className="flex flex-col gap-2 mb-6">
                <div className="text-lg font-semibold mb-1">Study Question</div>
                {isHost ? (
                  <div>
                    {/* Show question input when no question exists or when ready for next question */}
                    {(!room?.question || (revealed && readyForNextQuestion)) ? (
                      <>
                        {revealed && readyForNextQuestion && (
                          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-green-700 text-sm font-medium">Ready for the next question! Enter a new question to start the next round.</p>
                          </div>
                        )}
                        <textarea
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition mb-2 resize-none"
                          value={questionInput}
                          onChange={e => setQuestionInput(e.target.value)}
                          placeholder="Enter a question for the room"
                          rows={3}
                        />
                        <button
                          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition disabled:opacity-60 mb-2"
                          onClick={handlePostQuestion}
                          disabled={posting || !questionInput.trim()}
                        >
                          {posting ? 'Posting...' : 'Post Question'}
                        </button>
                      </>
                    ) : (
                      <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg shadow-sm min-h-[48px] text-lg text-gray-800 font-medium">
                        {room?.question ? room.question : <span className="text-gray-400">No question posted yet.</span>}
                      </div>
                    )}
                    {/* Reveal Answers Button for Host */}
                    {!revealed && !!room?.question && (
                      <button
                        className={`w-full mt-2 font-semibold py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-offset-2 transition ${
                          everyoneHasAnswered() 
                            ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-400' 
                            : 'bg-gray-400 text-white cursor-not-allowed'
                        }`}
                        onClick={handleRevealAnswers}
                        disabled={!everyoneHasAnswered()}
                      >
                        {everyoneHasAnswered() ? 'Reveal Answers' : 'Waiting for everyone to answer...'}
                      </button>
                    )}
                    
                    {/* Next Question Button for Host */}
                    {revealed && !readyForNextQuestion && (
                      <button
                        className="w-full mt-2 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
                        onClick={handleNextQuestion}
                      >
                        Next Question
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg shadow-sm min-h-[48px] text-lg text-gray-800 font-medium">
                    {room?.question ? room.question : <span className="text-gray-400">No question posted yet.</span>}
                  </div>
                )}
              </div>
              {/* Private Answer Pad */}
              <div className="flex flex-col gap-2 mb-6">
                <div className="text-lg font-semibold mb-1">Your Private Answer</div>
                {!room?.question ? (
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-center text-gray-500">
                    Wait for the host to post a question before you can answer.
                  </div>
                ) : hasSavedAnswer ? (
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg shadow-sm">
                    <div className="text-green-700 text-sm font-medium mb-2">Your saved answer:</div>
                    <div className="text-gray-800 whitespace-pre-line">{answers.find(a => a.userId === getOrCreateUserId())?.text || 'Answer saved!'}</div>
                  </div>
                ) : (
                  <>
                    {/* Answer Mode Toggle */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-gray-600">Answer mode:</span>
                      <div className="flex bg-gray-100 rounded-lg p-1">
                        <button
                          onClick={() => setAnswerMode('text')}
                          className={`px-3 py-1 text-sm rounded-md transition ${
                            answerMode === 'text' 
                              ? 'bg-white text-gray-900 shadow-sm' 
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          Text
                        </button>
                        <button
                          onClick={() => setAnswerMode('drawing')}
                          className={`px-3 py-1 text-sm rounded-md transition ${
                            answerMode === 'drawing' 
                              ? 'bg-white text-gray-900 shadow-sm' 
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          Drawing
                        </button>
                      </div>
                    </div>

                    {/* Text Answer Input */}
                    {answerMode === 'text' && (
                      <textarea
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition mb-2 resize-none"
                        value={answer}
                        onChange={e => setAnswer(e.target.value)}
                        placeholder="Write your answer here..."
                        rows={5}
                      />
                    )}

                    {/* Drawing Canvas */}
                    {answerMode === 'drawing' && (
                      <div className="mb-2">
                        <DrawingCanvas
                          width={600}
                          height={400}
                          onDrawingChange={setDrawingData}
                          readOnly={false}
                        />
                      </div>
                    )}

                    <button
                      className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition disabled:opacity-60"
                      onClick={handleSaveAnswer}
                      disabled={saving || (answerMode === 'text' ? !answer.trim() : !drawingData)}
                    >
                      {saving ? 'Saving...' : 'Save Answer'}
                    </button>
                    {saved && <span className="text-green-600 font-semibold ml-2">Saved!</span>}
                  </>
                )}
              </div>
              {/* Revealed Answers Section */}
              <div className="mt-8">
                {revealed ? (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">Revealed Answers</h2>
                    {fetchingAnswers && !answersLoaded ? (
                      <div className="text-center text-gray-400">Loading answers...</div>
                    ) : answers.length === 0 ? (
                      <div className="text-center text-gray-400">No answers submitted yet.</div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {answers.map(ans => (
                          <div key={ans.id} className="bg-white border border-gray-200 rounded-xl shadow-md p-5 flex flex-col gap-2 hover:shadow-lg transition">
                            <span className="inline-block bg-indigo-100 text-indigo-700 font-mono text-xs px-2 py-1 rounded-full w-fit">{ans.username}</span>
                            <div className="mt-1 text-gray-800 whitespace-pre-line text-base">{ans.text}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-gray-400 text-center">Answers hidden until reveal.</div>
                )}
              </div>
            </div>
          </div>
          
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <ParticipantsSidebar
              users={users}
              hostId={room?.hostId || ''}
              currentUserId={getOrCreateUserId()}
              answers={answers}
              question={room?.question || null}
              revealed={revealed}
              onKickUser={handleKickUser}
            />
          </div>
        </div>
        
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
            <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Participants</h3>
                  <button
                    className="p-2 text-gray-500 hover:text-gray-700"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <ParticipantsSidebar
                  users={users}
                  hostId={room?.hostId || ''}
                  currentUserId={getOrCreateUserId()}
                  answers={answers}
                  question={room?.question || null}
                  revealed={revealed}
                  onKickUser={handleKickUser}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Kick Modal */}
      <KickModal
        isOpen={kickModal.isOpen}
        onClose={handleKickCancel}
        onConfirm={handleKickConfirm}
        username={kickModal.username}
      />
      
      {/* Kicked Modal */}
      {hasBeenKicked && <KickedModal />}
    </div>
  );
};

export default RoomPage;