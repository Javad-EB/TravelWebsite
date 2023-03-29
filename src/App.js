import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home'
import Footer from './Components/Footer/Footer'
import Tourism from './Components/Pages/Tourism'
import Tour from './Components/Pages/Tour'
import SignUp from './Components/Pages/SignUp'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' Index element={<Home />} />
        <Route path='/tourism' element={<Tourism />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='*' Index element={"NOT FOUND"} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
