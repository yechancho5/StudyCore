import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';
import { db } from '../lib/firebase';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';

const LandingPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Ensure a userId is present in localStorage
  const getOrCreateUserId = () => {
    let userId = localStorage.getItem('study-userId');
    if (!userId) {
      userId = nanoid(12);
      localStorage.setItem('study-userId', userId);
    }
    return userId;
  };

  const handleCreateRoom = async () => {
    if (!username.trim()) {
      setError('Username is required.');
      return;
    }
    setLoading(true);
    const newRoomId = nanoid(10);
    const userId = getOrCreateUserId();
    try {
      await setDoc(doc(collection(db, 'rooms'), newRoomId), {
        roomId: newRoomId,
        createdAt: serverTimestamp(),
        question: '',
        revealed: false,
        hostId: userId,
      });
      localStorage.setItem('study-username', username);
      router.push(`/room/${newRoomId}?username=${encodeURIComponent(username)}`);
    } catch (err) {
      setError('Failed to create room. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleJoinRoom = () => {
    if (!username.trim() || !roomId.trim()) {
      setError('Both username and Room ID are required to join a room.');
      return;
    }
    getOrCreateUserId(); // Ensure every user has a userId
    localStorage.setItem('study-username', username);
    router.push(`/room/${roomId}?username=${encodeURIComponent(username)}`);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-100 to-lime-100 overflow-hidden">
      {/* Blurred Glow Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[32rem] h-[32rem] bg-gradient-to-br from-green-300 via-emerald-200 to-lime-200 rounded-full blur-3xl opacity-60 animate-pulse-slow" />
      </div>
      {/* Main Card */}
      <main className="relative z-10 w-full max-w-md mx-auto p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col gap-8 border border-green-100 animate-fade-in">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-2">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-200 to-emerald-200 shadow-lg">
            {/* Book/Study SVG */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-green-600" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="18" height="14" rx="3" fill="currentColor" className="opacity-20"/>
              <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
        {/* Title & Subtitle */}
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Collaborative Study Room</h1>
          <p className="text-gray-500 text-lg">Join or create a room to study together in real time.</p>
        </div>
        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="username">Username <span className="text-red-500">*</span></label>
            <input
              id="username"
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition placeholder-gray-400 bg-white/90"
              value={username}
              onChange={e => { setUsername(e.target.value); setError(''); }}
              required
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="roomId">Room ID</label>
            <input
              id="roomId"
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition placeholder-gray-400 bg-white/90"
              value={roomId}
              onChange={e => { setRoomId(e.target.value); setError(''); }}
              placeholder="Enter Room ID to join (optional)"
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center font-medium animate-shake">
              {error}
            </div>
          )}
        </div>
        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-2">
          <button
            className="w-full bg-emerald-500 text-white font-semibold py-3 rounded-xl shadow hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition hover:scale-105 disabled:opacity-60"
            onClick={handleCreateRoom}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Room'}
          </button>
          <button
            className="w-full bg-white border border-emerald-200 text-emerald-700 font-semibold py-3 rounded-xl shadow hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition hover:scale-105"
            onClick={handleJoinRoom}
          >
            Join Room
          </button>
        </div>
      </main>
      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in { animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both; }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        @keyframes shake {
          10%, 90% { transform: translateX(-1px); }
          20%, 80% { transform: translateX(2px); }
          30%, 50%, 70% { transform: translateX(-4px); }
          40%, 60% { transform: translateX(4px); }
        }
        .animate-shake { animation: shake 0.4s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </div>
  );
};

export default LandingPage; 