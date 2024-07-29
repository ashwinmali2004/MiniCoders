'use client'
import React, { useState } from 'react';

import Sidebar from '../components/Sidebar';
import ChatInput from '../Chat/ChatInput';
import ChatMessage from '../Chat/ChatMessage';
import SuggestionsList from '../SuggestionsList';

const suggestions = [
  'How to calculate the total sales from the "sales" table in My TestDatabase?',
  'How to find the names of employees who joined before 2020 in MySQL?',
  'Automate updating the status column to inactive for users who have not logged in for over a year in MySQL',
  'Run Query on My TestDatabase If the salary field is empty, Update a message Salary not available  ',
  'Provide a MySQL query to generate data for a bar chart of sales by month.',
  'Run Query on My TestDatabase Update columan "Name" to "FullName"'
];

const DataAichat2: React.FC = () => {
  const [messages, setMessages] = useState<{ message: string, timestamp: string, user: { name: string, avatar: string }, isFile?: boolean }[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleSendMessage = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const user = { name: 'You', avatar: '/images/piyush.jpg' }; // Example user data
    setMessages([...messages, { message, timestamp, user }]);
    setShowSuggestions(false);
  };

  const handleReset = () => {
    setMessages([]);
    setShowSuggestions(true);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className='bg-red-200 p-2'>
    <div className="min-h-[85vh] flex">
      <Sidebar />
      <div className="flex-grow flex flex-col bg-slate-50  ml-3 mr-2 pt-3 pr-3 rounded-xl">
       
        <div className="flex-grow pl-5 pr-2 pt-1 overflow-y-auto">
          {showSuggestions && (
            <SuggestionsList
              suggestions={suggestions}
              onSelectSuggestion={handleSelectSuggestion}
            />
          )}
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.message} timestamp={msg.timestamp} user={msg.user} isFile={msg.isFile} />
          ))}
        </div>
        <div className='pl-4'>
        <ChatInput onSendMessage={handleSendMessage} onReset={handleReset} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default DataAichat2;
