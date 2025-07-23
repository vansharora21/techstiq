import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Banner from './components/HomePage..jsx';


function App() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop();
  }, [location]); // Scro
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/Contact-Us" element={<ContactUs />} />



      </Routes>
      <Footer />
    </div>
  );
}

export default App;
