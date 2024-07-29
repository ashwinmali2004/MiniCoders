import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-100 w-64 p-4 rounded-xl">
    <h2 className="font-bold text-lg mb-4">Your Queries</h2>
    <ul>
      <li className="mb-2"><button className="text-left w-full">Query history</button></li>
      <li className="mb-2"><button className="text-left w-full">Data categories</button></li>
      <li className="mb-2"><button className="text-left w-full">Query results</button></li>
      <li className="mb-2"><button className="text-left w-full">Data visualization</button></li>
      <li className="mb-2"><button className="text-left w-full">Query performance</button></li>
      <li className="mb-2"><button className="text-left w-full">Data insights</button></li>
      <li className="mb-2"><button className="text-left w-full">Data trends</button></li>
      <li className="mb-2"><button className="text-left w-full">Lorem ipsum</button></li>
    </ul>
  </div>
  );
};

export default Sidebar;
