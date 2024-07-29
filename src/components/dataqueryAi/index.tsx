'use client'
import React, { useState } from 'react';
import ChatInput from "./ChatInput";
import Dataaisetting from "./setting";
import SuggestionsList from "./SuggestionsList";
import ChatMessage from './chatMessages';

const DataQueryAi = () => {
  const [messages, setMessages] = useState<{ message: string, timestamp: string }[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleSendMessage = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setMessages([...messages, { message, timestamp }]);
    setShowSuggestions(false);
  };

  const handleReset = () => {
    setMessages([]);
    setShowSuggestions(true);
  };
  return (
    <div className="ml-2 mr-2 flex flex-row  ">
      <div className="w-1/2 flex flex-col  border-2 border-red-400 m-2">
      <Dataaisetting />
      </div>

      <div className="h-[80vh] w-1/2 flex flex-col border-2 border-red-400 m-2">
      <div className="flex-grow p-6">
        {showSuggestions ? (
          <SuggestionsList />
        ) : (
          <div className="overflow-y-auto max-h-full">
            {messages.map((msg, index) => (
              <ChatMessage key={index} message={msg.message} timestamp={msg.timestamp} />
            ))}
          </div>
        )}
      </div>
      <ChatInput onSendMessage={handleSendMessage} onReset={handleReset} />
    </div>
      </div>
    
  );
};

export default DataQueryAi;
