'use client'
import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { Button } from '../ui/button';
import QueryModal from './bestModal';
import convertPromptToSQL from '@/utils/convertPromptToSQL';
import axios from 'axios';
import { generateAnswer } from '@/utils/generateAnswer';


const SQLQueryGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [sqlQuery, setSqlQuery] = useState('');
  const [description, setDescription] = useState('');
  const [sql, setSql] = useState('');
  const [dbType, setDbType] = useState('MySQL');
  const [isGenerated, setIsGenerated] = useState(true);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const handleGenerateQuery = async () => {
    try {
      const query = await convertPromptToSQL(prompt);
      setSqlQuery(query);
    } catch (error) {
      console.error('Failed to generate SQL query:', error);
    }
  };

  const handleGenerateAnswer = (e: FormEvent) => {
    e.preventDefault();
    const fullQuestion = `Using ${dbType}, ${question}`;
    generateAnswer(dbType,fullQuestion, setAnswer, setGeneratingAnswer);
  };

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
    "MongoDB",
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
    setDbType(option); // Update the dbType state with the selected option
    setIsDropdownOpen(false);
  };

  return (
    <div className="container mx-auto p-5 mt-10">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col w-full md:w-1/2 border-2 mr-2 border-gray-300 shadow-xl shadow-red-300 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Input:</h2>
          <form onSubmit={handleGenerateAnswer}>
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
                  type="button"
                  className={`flex-1 p-2 rounded-lg ${isGenerated ? 'bg-gray-200 border-2 border-black' : ''}`}
                  onClick={() => {
                    setIsGenerated(true);
                    handleGenerate();
                  }}
                >
                  GENERATED
                </button>
                <button
                  type="button"
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
            <p>Write below what the SQL query should do. Provide table and column names for more accurate results.</p>
            <input
              type="text"
              onChange={(e) => setPrompt(e.target.value)}
            />
            <textarea
              required
              className="border min-h-[200px] border-gray-300 rounded w-full my-2 p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Retrieve rows where the quantity is greater than 10 ..."
            ></textarea>
            <Button className="mt-5 w-1/4 mb-4" onClick={handleGenerateQuery}>
              Generate
            </Button>
          </form>
       
        </div>
        <div className="flex flex-col w-full md:w-1/2 border-2 border-gray-300 shadow-xl shadow-cyan-300 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Result:</h2>
          <div className="bg-gray-200 border rounded-xl mt-3 h-[400px] hover:shadow-lg hover:shadow-gray-400 overflow-y-auto">
            <div className="h-10 w-full rounded-t-xl bg-gray-300 flex">
              <h1 className="pt-3 pl-4 font-bold text-blue-700">{selectedOption}</h1>
              <button className="" onClick={() => navigator.clipboard.writeText(sqlQuery)}>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 -0.5 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.94605 4.99995L13.2541 4.99995C14.173 5.00498 15.0524 5.37487 15.6986 6.02825C16.3449 6.68163 16.7051 7.56497 16.7001 8.48395V12.716C16.7051 13.6349 16.3449 14.5183 15.6986 15.1717C15.0524 15.825 14.173 16.1949 13.2541 16.2H8.94605C8.02707 16.1949 7.14773 15.825 6.50148 15.1717C5.85522 14.5183 5.495 13.6349 5.50005 12.716L5.50005 8.48495C5.49473 7.5658 5.85484 6.6822 6.50112 6.0286C7.1474 5.375 8.0269 5.00498 8.94605 4.99995Z"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.1671 19H14.9371C17.4857 18.9709 19.5284 16.8816 19.5001 14.333V9.666"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <pre className="whitespace-pre-wrap p-3">{answer}</pre>
          </div>
          <p className="mt-2 text-sm text-gray-500 pl-2">
            Make sure to replace <code>your_table_name</code> with the actual name of your table.
          </p>
          <button
            className="mt-2 p-2 bg-gray-300 rounded-md hover:border hover:border-black w-1/5 float-right"
            onClick={() => navigator.clipboard.writeText(sql)}
          >
            Copy
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
