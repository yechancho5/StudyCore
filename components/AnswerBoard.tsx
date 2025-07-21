import React from 'react';

type Answer = {
  id: string;
  name: string;
  text: string;
};

type Props = {
  answers: Answer[];
  revealed: boolean;
};

const AnswerBoard: React.FC<Props> = ({ answers, revealed }) => (
  <div className="mt-6">
    <h2 className="text-xl font-semibold mb-2">{revealed ? 'All Answers' : 'Answers (hidden)'}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {answers.length === 0 ? (
        <div className="text-gray-400">No answers yet.</div>
      ) : (
        answers.map(ans => (
          <div key={ans.id} className="bg-white shadow rounded p-4">
            <div className="font-bold text-purple-700">{ans.name}</div>
            <div className="mt-2 text-gray-800">{revealed ? ans.text : <span className="italic text-gray-400">Hidden</span>}</div>
          </div>
        ))
      )}
    </div>
  </div>
);

export default AnswerBoard; 