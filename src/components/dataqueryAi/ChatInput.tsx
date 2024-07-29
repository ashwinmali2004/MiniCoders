import React, { useState } from 'react';

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  onReset: () => void;
};

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, onReset }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    onSendMessage(inputValue);
    setInputValue('');
  };

  return (
    <div className=" p-4 bg-white shadow-lg flex items-center space-x-4">
      <input
        type="text"
        placeholder="Type your message here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow p-2 border rounded-lg"
      />
      <button
        onClick={handleSendMessage}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
      >
        Send Message
      </button>
      <button
        onClick={onReset}
        className="bg-red-500 text-white py-2 px-4 rounded-lg"
      >
        Reset
      </button>
    </div>
  );
};

export default ChatInput;
