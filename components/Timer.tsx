import React from 'react';

type Props = {
  secondsLeft: number;
};

const formatTime = (s: number) => {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, '0')}`;
};

const Timer: React.FC<Props> = ({ secondsLeft }) => (
  <div className="text-center text-lg font-mono text-blue-600 mb-4">
    Time Left: {formatTime(secondsLeft)}
  </div>
);

export default Timer; 