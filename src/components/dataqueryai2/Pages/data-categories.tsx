import React from 'react';
import Sidebar from '../components/Sidebar';
import DataCategories from '../components/DataCategories';

const DataCategoriesPage: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-grow p-6">
        <DataCategories />
      </main>
    </div>
  );
};

export default DataCategoriesPage;
