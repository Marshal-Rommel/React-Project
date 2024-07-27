import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Manual from './components/Manual';
import './styles/Calculator.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/manual" className="nav-link">Manual</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/manual" element={<Manual />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
