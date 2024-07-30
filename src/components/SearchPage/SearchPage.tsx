'use client'
import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface SearchResult {
  id: number;
  title: string;
  content: string;
  url: string;
  src: string;
  tag: string;
}

const SearchPagefunction = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.get(`/api/search?query=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div className='rounded-lg min-h-[86vh] bg-white'>
        <div className='flex flex-row justify-center min-w-[30vw]'>
        <div className='mt-3 flex flex-row'>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          autoComplete='off'
          className='border min-w-[20vw] h-10 rounded-xl border-red-600 pl-3 focus:border-blue-500 ring-blue-500'
        />
       <button type="submit" className="  p-2.5 ms-2 text-sm font-medium text-white bg-red-600 rounded-lg border border-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
      </form>
      </div>
      </div>
      <div className='p-3 overflow-y-scroll max-h-[76vh] '>
      <div>
        {results.map((result) => (
          <div key={result.id} className='p-2 bg-gradient-to-r from-cyan-300 via to-orange mt-2 rounded-xl flex flex-row'>
            <div> <Image src="/images/search-image.png" height={100} width={100} alt="image" className='mr-2 rounded-l-lg'/> </div>
            <div> 
            <h2 className='font-bold'>{result.title}</h2>
            <p>{result.content}</p>
    
            <Link href={result.url} > <button className='pl-2 pr-2 pt-1 pb-1 mt-3 text-sm bg-indigo-600 text-white font-bold rounded-sm hover:bg-purple-500'>More Info</button></Link>
            </div>
          </div>
        ))}
      </div>
      <p className='text-center text-xs text-slate-500 '>search query in searchBox</p>
      </div>
    </div>
  );
};

export default SearchPagefunction;
