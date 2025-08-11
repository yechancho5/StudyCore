import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';

const POLL_INTERVAL = 2000; // 2 seconds - more responsive

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
      setAnswers(data);
    } catch (err) {
      // Silently fail for polling
    }
  }, [roomId]);

  // Use refs to store stable references to the fetch functions
  const fetchRoomRef = useRef(fetchRoom);
  const pollRoomRef = useRef(pollRoom);
  const fetchAnswersRef = useRef(fetchAnswers);
  const pollAnswersRef = useRef(pollAnswers);
  
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

  // Single polling mechanism using stable refs
  useEffect(() => {
    if (!roomId || typeof roomId !== 'string') return;
    
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

  // Separate effect for answers polling
  useEffect(() => {
    if (!roomId || typeof roomId !== 'string' || !revealed) return;
    
    // Initial fetch with loading state
    fetchAnswersRef.current();
    
    // Set up polling only if POLL_INTERVAL > 0
    if (POLL_INTERVAL > 0) {
      const interval = setInterval(() => {
        pollAnswersRef.current();
      }, POLL_INTERVAL);
      
      return () => clearInterval(interval);
    }
  }, [roomId, revealed]); // Only depend on roomId and revealed

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
    if (!answer.trim()) return;
    setSaving(true);
    setSaved(false);
    const userId = getOrCreateUserId();
    try {
      const res = await fetch(`/api/room/${roomId}/answers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, username: username || 'Anonymous', text: answer }),
      });
      if (!res.ok) throw new Error('Failed to save answer');
      
      // Update local state immediately to avoid blinking
      const newAnswer = {
        id: Date.now().toString(), // Temporary ID
        roomId,
        userId,
        username: username || 'Anonymous',
        text: answer,
        timestamp: new Date(),
        revealed: false
      };
      setAnswers(prev => [...prev, newAnswer]);
      setSaved(true);
      setHasSavedAnswer(true); // Mark that user has saved an answer
      setTimeout(() => setSaved(false), 2000);
      setAnswer(''); // Clear the input
      
      // Notify other users immediately
      localStorage.setItem(`room-${roomId}-updated`, Date.now().toString());
    } catch (err) {
      alert('Failed to save answer.');
    } finally {
      setSaving(false);
    }
  };

  // Reveal answers (host only)
  const handleRevealAnswers = async () => {
    if (!roomId || typeof roomId !== 'string') return;
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

  // Next question button (host only)
  const handleNextQuestion = () => {
    setReadyForNextQuestion(true);
    setQuestionInput(''); // Clear any existing input
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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-200 py-10">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl flex flex-col gap-8">
        {/* Room ID badge */}
        <div className="flex justify-center mb-2">
          <span className="inline-block bg-indigo-100 text-indigo-700 font-mono text-xs px-3 py-1 rounded-full shadow-sm border border-indigo-200">Room ID: {roomId}</span>
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
                  className="w-full mt-2 bg-red-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition"
                  onClick={handleRevealAnswers}
                >
                  Reveal Answers
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
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition mb-2 resize-none"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
                placeholder="Write your answer here..."
                rows={5}
              />
              <button
                className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition disabled:opacity-60"
                onClick={handleSaveAnswer}
                disabled={saving || !answer.trim()}
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
  );
};

export default RoomPage;