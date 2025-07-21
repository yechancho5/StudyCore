import React from 'react';

type Props = {
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
};

const PrivateAnswerPad: React.FC<Props> = ({ value, onChange, disabled }) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-2">Your Answer</label>
    <textarea
      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Write your answer here..."
      rows={5}
      disabled={disabled}
    />
  </div>
);

export default PrivateAnswerPad; 