import React from 'react';

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

const RevealButton: React.FC<Props> = ({ onClick, disabled }) => (
  <button
    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition disabled:opacity-50"
    onClick={onClick}
    disabled={disabled}
  >
    Reveal All Answers
  </button>
);

export default RevealButton; 