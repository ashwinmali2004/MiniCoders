import React from 'react';

type SuggestionsListProps = {
  suggestions: string[];
  onSelectSuggestion: (suggestion: string) => void;
};

const SuggestionsList: React.FC<SuggestionsListProps> = ({ suggestions, onSelectSuggestion }) => {
  return (
    <div className="p-4 bg-slate-200 border-b border-gray-200 rounded-xl">
      <h3 className="font-semibold mb-2">Suggestions</h3>
      <ul className="space-y-2">
        {suggestions.map((suggestion, index) => (
          <li key={index}>
            <button
              onClick={() => onSelectSuggestion(suggestion)}
              className="w-full text-left text-blue-600 hover:underline"
            >
              {suggestion}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionsList;
