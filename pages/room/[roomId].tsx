import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';

const POLL_INTERVAL = 3000;

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

  // Ensure a userId is present in localStorage
  const getOrCreateUserId = () => {
    let userId = localStorage.getItem('study-userId');
    if (!userId) {
      userId = nanoid(12);
      localStorage.setItem('study-userId', userId);
    }
    return userId;
  };

  // Fetch room data
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

  // Fetch answers
  const fetchAnswers = useCallback(async () => {
    if (!revealed || !roomId || typeof roomId !== 'string') return;
    setFetchingAnswers(true);
    try {
      const res = await fetch(`/api/room/${roomId}/answers`);
      if (!res.ok) throw new Error('Failed to fetch answers');
      const data = await res.json();
      setAnswers(data);
    } catch (err) {
      // Optionally set error
    } finally {
      setFetchingAnswers(false);
    }
  }, [revealed, roomId]);

  // Poll for room and answers
  useEffect(() => {
    fetchRoom();
    let roomInterval: NodeJS.Timeout;
    if (roomId && typeof roomId === 'string') {
      roomInterval = setInterval(fetchRoom, POLL_INTERVAL);
    }
    return () => {
      if (roomInterval) clearInterval(roomInterval);
    };
  }, [fetchRoom, roomId]);

  useEffect(() => {
    fetchAnswers();
    let answersInterval: NodeJS.Timeout;
    if (revealed && roomId && typeof roomId === 'string') {
      answersInterval = setInterval(fetchAnswers, POLL_INTERVAL);
    }
    return () => {
      if (answersInterval) clearInterval(answersInterval);
    };
  }, [fetchAnswers, revealed, roomId]);

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
        body: JSON.stringify({ question: questionInput }),
      });
      if (!res.ok) throw new Error('Failed to post question');
      fetchRoom();
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
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
      fetchAnswers();
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
      fetchRoom();
    } catch (err) {
      alert('Failed to reveal answers.');
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
              {/* If no question or revealed, show textarea and Post button. Otherwise, show question as read-only */}
              {(!room?.question || revealed) ? (
                <>
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
                    disabled={posting}
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
        </div>
        {/* Revealed Answers Section */}
        <div className="mt-8">
          {revealed ? (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">Revealed Answers</h2>
              {fetchingAnswers ? (
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