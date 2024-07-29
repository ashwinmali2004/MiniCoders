import React from 'react';

type SuggestionProps = {
  title: string;
  description: string;
};

const Suggestion: React.FC<SuggestionProps> = ({ title, description }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
};

export default Suggestion;
