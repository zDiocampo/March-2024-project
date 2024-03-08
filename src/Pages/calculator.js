import React, { useState, useEffect } from 'react';
import './calculator.css';

const Calculator = () => {
    const [result, setResult] = useState('');
    const [resultsHistory, setResultsHistory] = useState([]);
  
    useEffect(() => {
      const storedResults = JSON.parse(localStorage.getItem('results')) || [];
      setResultsHistory(storedResults);
    }, []);
  
    const handleClick = (value) => {
      if (value === '=') {
        try {
          const newResult = eval(result).toString();
          setResult(newResult);
          const updatedHistory = [...resultsHistory, newResult];
          if (updatedHistory.length > 10) {
            updatedHistory.shift();
          }
          setResultsHistory(updatedHistory);
          localStorage.setItem('results', JSON.stringify(updatedHistory));
        } catch (error) {
          setResult('Error');
        }
      } else if (value === 'C') {
        setResult('');
      } else if (value === 'clearHistory') {
        setResultsHistory([]);
        localStorage.removeItem('results');
      } else {
        setResult(result + value);
      }
    };
  
    return (
    <div className='background'>
      <div className="calculator">
        <input type="text" value={result} disabled />
        <div className="keypad">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('C')}>C</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('=')}>=</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
        <div className="history">
          {resultsHistory.length > 0 && (
            <button onClick={() => handleClick('clearHistory')}>Clear History</button>
          )}
          <ul>
            {resultsHistory.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    );
  };
  
  export default Calculator;