import React from 'react';

type ChatMessageProps = {
  message: string;
  timestamp: string;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ message, timestamp }) => {
  return (
    <div className="mb-4">
      <div className="bg-blue-100 p-4 rounded-lg shadow-md">
        {message}
      </div>
      <div className="text-sm text-gray-600 mt-1">
        {timestamp}
      </div>
    </div>
  );
};

export default ChatMessage;
