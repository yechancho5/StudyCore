import React from 'react';

interface User {
  id: string;
  userId: string;
  username: string;
  lastSeen: string;
  createdAt: string;
}

interface ParticipantsSidebarProps {
  users: User[];
  hostId: string;
  currentUserId: string;
  answers: any[];
  question: string | null;
  revealed: boolean;
}

const ParticipantsSidebar: React.FC<ParticipantsSidebarProps> = ({
  users,
  hostId,
  currentUserId,
  answers,
  question,
  revealed
}) => {
  const isOnline = (lastSeen: string) => {
    const lastSeenTime = new Date(lastSeen).getTime();
    const now = Date.now();
    return now - lastSeenTime < 120000; // 2 minutes
  };

  const hasAnswered = (userId: string) => {
    // Find the user in the users array to get their database ID
    const user = users.find(u => u.userId === userId);
    if (!user) return false;
    
    // Check if this user has an answer using their database ID
    const hasAnswer = answers.some(answer => answer.userId === user.id);
    console.log(`User ${userId} (${user.username}) has answered: ${hasAnswer}`, {
      userDbId: user.id,
      answers: answers.map(a => ({ answerUserId: a.userId, answerUsername: a.username }))
    });
    return hasAnswer;
  };

  const getAnswerStatus = (userId: string) => {
    if (!question) return 'waiting';
    if (hasAnswered(userId)) return 'answered';
    return 'pending';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'answered':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'waiting':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'answered':
        return 'Answered';
      case 'pending':
        return 'Pending';
      case 'waiting':
        return 'Waiting';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="w-64 bg-white shadow-lg rounded-lg p-4 h-fit">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
        Participants ({users.length})
      </h3>
      
      <div className="space-y-3">
        {users.map((user) => {
          const isHost = user.userId === hostId;
          const isCurrentUser = user.userId === currentUserId;
          const online = isOnline(user.lastSeen);
          const answerStatus = getAnswerStatus(user.userId);
          
          return (
            <div
              key={user.id}
              className={`flex items-center justify-between p-3 rounded-lg border ${
                isCurrentUser ? 'bg-indigo-50 border-indigo-200' : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                {/* Host Crown */}
                {isHost && (
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                )}
                
                {/* Username */}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium truncate ${
                    isHost ? 'text-yellow-700' : 'text-gray-900'
                  }`}>
                    {user.username}
                    {isCurrentUser && ' (You)'}
                  </p>
                  <div className="flex items-center space-x-2">
                    {/* Online Status */}
                    <div className={`w-2 h-2 rounded-full ${
                      online ? 'bg-green-500' : 'bg-gray-400'
                    }`} />
                    <span className="text-xs text-gray-500">
                      {online ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Answer Status */}
              {question && !revealed && (
                <div className="flex-shrink-0 ml-2">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(answerStatus)}`} 
                       title={getStatusText(answerStatus)} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Answer Status Legend */}
      {question && !revealed && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Answer Status</h4>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-gray-600">Answered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="text-xs text-gray-600">Pending</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParticipantsSidebar;
