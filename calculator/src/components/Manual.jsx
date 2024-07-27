import React from 'react';
import '../styles/Calculator.css';

const Manual = () => {
  return (
    <div className="manual-container">
      <h2 className="manual-title">User Manual</h2>
      <div className="manual-section">
        <p>
          Welcome to the React Calculator! This simple calculator allows you to perform basic arithmetic operations.
        </p>
        <h3>How to use:</h3>
        <ul className="manual-list">
          <li>Click on the number buttons to input numbers</li>
          <li>Use the operator buttons (+, -, *, /) to perform operations</li>
          <li>Press '=' to calculate the result</li>
          <li>Press 'Clear' to reset the calculator</li>
          <li>You can also use your keyboard for input</li>
        </ul>
      </div>
      <h2 className="manual-title">About</h2>
      <div className="manual-section">
        <p>
          This calculator was built using React and the mathjs library. It demonstrates the use of React hooks, 
          React Router for navigation, and custom CSS for styling.
        </p>
      </div>
    </div>
  );
};

export default Manual;
