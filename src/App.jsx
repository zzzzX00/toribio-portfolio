import React, { useState } from 'react';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';  // Import the Navbar component
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="components">
      {/* Add Navbar component above Hero */}
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;