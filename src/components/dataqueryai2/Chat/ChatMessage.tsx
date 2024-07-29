import Image from 'next/image';
import React from 'react';

type ChatMessageProps = {
  message: string;
  timestamp: string;
  user: {
    name: string;
    avatar: string;
  };
  isFile?: boolean;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ message, timestamp, user, isFile }) => {
  return (
    <div className="flex items-start mb-4">
      <Image width={40} height={40}  src={user.avatar} alt={user.name}  className=" rounded-full mr-4" />
      <div>
        <div className="flex items-center mb-1">
          <span className="font-semibold mr-2">{user.name}</span>
          <span className="text-xs text-gray-500">{timestamp}</span>
        </div>
        {isFile ? (
          <div className="p-4 bg-gray-100 rounded-lg border border-gray-300">
            <p className="mb-2">{message}</p>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">View</button>
              <button className="bg-green-500 text-white px-2 py-1 rounded">Share</button>
            </div>
          </div>
        ) : (
            <div className="p-4 bg-gray-100 rounded-lg border border-gray-300">
          <p>{message}</p>
          </div>
        )}
        <div className="mt-2 flex space-x-2 text-gray-500">
          <button>❤️</button>
          <button>👍</button>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
