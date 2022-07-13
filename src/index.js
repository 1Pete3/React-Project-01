import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}
root.render(<App />);
