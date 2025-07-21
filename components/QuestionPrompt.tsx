import React from 'react';

type Props = {
  value: string;
  onChange?: (val: string) => void;
  editable?: boolean;
};

const QuestionPrompt: React.FC<Props> = ({ value, onChange, editable }) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-2">Study Question</label>
    {editable ? (
      <textarea
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        placeholder="Enter a question for the room"
        rows={3}
      />
    ) : (
      <div className="bg-gray-100 p-4 rounded min-h-[48px]">{value || <span className="text-gray-400">No question set yet.</span>}</div>
    )}
  </div>
);

export default QuestionPrompt; 