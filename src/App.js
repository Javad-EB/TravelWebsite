import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' Index element={<Home />} />
        <Route path='*' Index element={"NOT FOUND"} />
      </Routes>

    </Router>

  );
}

export default App;
