'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { DialogTrigger} from "@/components/ui/dialog"
import QueryModal from './bestModal';
  



const SQLQueryGenerator = () => {
    
      
      
      
  const [description, setDescription] = useState('');
  const [sql, setSql] = useState('');
  const [dbType, setDbType] = useState('MySQL');
  const [isGenerated, setIsGenerated] = useState(true);

  const handleGenerate = () => {
    let generatedSQL = `-- This query retrieves all rows from the 'your_table_name'\n`;
    generatedSQL += `SELECT *\n`;
    generatedSQL += `FROM your_table_name\n`;
    generatedSQL += `WHERE quantity > 10;`;

    setSql(generatedSQL);
  };

  const handleExplain = () => {
    let explanation = `This query selects all columns from the 'your_table_name' table where the quantity is greater than 10.`;
    setSql(explanation);
  };

const options = [
    "SQL",
    "SQLite",
    "MySQL",
    "MariaDB",
    "PostgreSQL",
    "Oracle DB",
    "MSSQL Server",
    "Microsoft Access",
    "Amazon Aurora",
    "Google Cloud SQL",
    "CockroachDB"
  ];
  

    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
          setIsDropdownOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      setIsDropdownOpen(false);
    };

  

  return (
    <div className="container mx-auto p-5 mt-10">
      <div className="flex flex-col md:flex-row  gap-5">
        <div className="flex flex-col w-full md:w-1/2 border-2 mr-2 border-gray-300 shadow-xl shadow-red-300 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Input:</h2>
          <label className="mb-2 font-bold text-gray-500">
            I am using ...
          
          </label>
          <div className="custom-select" ref={selectRef}>
      <div
        className={`select-selected ${isDropdownOpen ? 'select-arrow-active' : ''}`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedOption}
      </div>
      {isDropdownOpen && (
        <div className="select-items">
          {options.map((option) => (
            <div
              key={option}
              className={option === selectedOption ? 'same-as-selected' : ''}
              onClick={() => handleOptionClick(option)}
            >
              {option}
              {option === selectedOption && <span style={{ float: 'right' }}>✔️</span>}
            </div>
          ))}
        </div>
      )}
    </div>
          <label className="mb-2 pt-3">
            I want the SQL Query to be...
            <div className="flex mt-3">
              <button
                className={`flex-1 p-2  rounded-lg  ${isGenerated ? 'bg-gray-200 border-2 border-black' : ''} `}
                onClick={() => {
                  setIsGenerated(true);
                  handleGenerate();
                }}
              >
                GENERATED
              </button>
              <button
                className={`flex-1 p-2 ml-2 border rounded-lg ${!isGenerated ? 'bg-gray-200 border-2 border-black' : ''}`}
                onClick={() => {
                  setIsGenerated(false);
                  handleExplain();
                }}
              >
                EXPLAINED
              </button>
            </div>
          </label>
          <p> Write below what the sql query Should do. provide table and column names for more accurate results</p>
          <textarea
            className="block h-[200px] w-full p-3 border rounded-xl mt-2"
            rows={4}
            placeholder="Retrieve rows where the quantity is greater than 10 ..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            className="mt-5 w-1/4 2 mb-4"
            onClick={isGenerated ? handleGenerate : handleExplain}
          >
            generate
          </Button>
        </div>
        <div className="flex flex-col w-full md:w-1/2 border-2 border-gray-300 shadow-xl shadow-cyan-300 rounded-lg p-4 ">
          <h2 className="text-xl font-bold mb-2">Result:</h2>
          <div className="bg-gray-200  border rounded-xl mt-3 h-[400px] hover:shadow-lg hover:shadow-gray-400">
            <div className='h-10 w-full rounded-t-xl bg-gray-300 flex'>
                <h1 className='pt-3 pl-4 font-bold text-blue-700 '>{selectedOption}</h1>
                <button className="" onClick={() => navigator.clipboard.writeText(sql)}><svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.94605 4.99995L13.2541 4.99995C14.173 5.00498 15.0524 5.37487 15.6986 6.02825C16.3449 6.68163 16.7051 7.56497 16.7001 8.48395V12.716C16.7051 13.6349 16.3449 14.5183 15.6986 15.1717C15.0524 15.825 14.173 16.1949 13.2541 16.2H8.94605C8.02707 16.1949 7.14773 15.825 6.50148 15.1717C5.85522 14.5183 5.495 13.6349 5.50005 12.716L5.50005 8.48495C5.49473 7.5658 5.85484 6.6822 6.50112 6.0286C7.1474 5.375 8.0269 5.00498 8.94605 4.99995Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.1671 19H14.9371C17.4857 18.9709 19.5284 16.8816 19.5001 14.333V9.666" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>

            </div>
            <pre className="whitespace-pre-wrap p-3">{sql}</pre>
          
     
          </div>
          <p className="mt-2 text-sm text-gray-500 pl-2 ">
              Make sure to replace <code>your_table_name</code> with the actual name of your table.
            </p>
          <button
              className="mt-2 p-2 bg-gray-300 rounded-md hover:border hover:border-black w-1/5 float-right"
              onClick={() => navigator.clipboard.writeText(sql)}
            >
              copy
            </button>
        </div>
      </div>
      <div className="mt-10">
       <QueryModal />

      </div>
    </div>
  );
};


export default SQLQueryGenerator;
