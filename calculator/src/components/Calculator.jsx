import React, { useState, useEffect, useCallback } from 'react';
import { evaluate } from 'mathjs';
import '../styles/Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = useCallback((value) => {
    setInput((prevInput) => prevInput + value);
  }, []);

  const handleClear = useCallback(() => {
    setInput('');
    setResult('');
  }, []);

  const handleCalculate = useCallback(() => {
    try {
      const calculatedResult = evaluate(input);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  }, [input]);

  const handleKeyDown = useCallback((event) => {
    const key = event.key;
    if (/[0-9+\-*/.=]/.test(key)) {
      event.preventDefault();
      if (key === '=') {
        handleCalculate();
      } else {
        handleButtonClick(key);
      }
    } else if (key === 'Enter') {
      event.preventDefault();
      handleCalculate();
    } else if (key === 'Escape') {
      event.preventDefault();
      handleClear();
    }
  }, [handleButtonClick, handleCalculate, handleClear]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="calculator-container">
      <div className="calculator-screen">
        <div className="calculator-input">{input || '0'}</div>
        <div className="calculator-result">{result}</div>
      </div>
      <div className="calculator-buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={`calculator-button ${isNaN(btn) && btn !== '.' ? 'operator' : ''} ${btn === '=' ? 'equals' : ''}`}
            onClick={() => btn === '=' ? handleCalculate() : handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
        <button className="calculator-button clear" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
