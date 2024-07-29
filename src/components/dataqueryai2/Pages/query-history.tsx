import React from 'react';
import Sidebar from '../components/Sidebar';
import QueryHistory from '../components/QueryHistory';

const QueryHistoryPage: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-grow p-6">
        <QueryHistory />
      </main>
    </div>
  );
};

export default QueryHistoryPage;
