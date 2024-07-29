import React from 'react';
import Suggestion from './Suggestion';

const suggestions = [
  { title: 'How to calculate', description: 'the sum of a column in excel' },
  { title: 'How to extract text between', description: 'the first and last period in cell E2.' },
  { title: 'Automate updating sales data', description: 'every Monday for specific cells like A2 to C100.' },
  { title: 'If a cell is empty', description: 'show a helpful message' },
  { title: 'A VBA Script Create a bar chart', description: 'with the range of A2 to C10' },
  { title: 'How to create a', description: 'pivot table in excel' },
];

const SuggestionsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {suggestions.map((suggestion, index) => (
        <Suggestion key={index} title={suggestion.title} description={suggestion.description} />
      ))}
    </div>
  );
};

export default SuggestionsList;
