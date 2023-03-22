import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home'
import Footer from './Components/Footer/Footer'
import Tourism from './Components/Pages/Tourism'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' Index element={<Home />} />
        <Route path='/tourism' element={<Tourism />} />
        <Route path='*' Index element={"NOT FOUND"} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
