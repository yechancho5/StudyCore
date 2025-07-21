import React from 'react';

type Props = {
  value: string;
  onChange: (val: string) => void;
};

const UsernameInput: React.FC<Props> = ({ value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-2" htmlFor="username">Username <span className="text-red-500">*</span></label>
    <input
      id="username"
      type="text"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      value={value}
      onChange={e => onChange(e.target.value)}
      required
      placeholder="Enter your name"
    />
  </div>
);

export default UsernameInput; 