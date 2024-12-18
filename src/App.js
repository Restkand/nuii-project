import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './front-end/components/navbar/navbar';
import Footer from './front-end/components/footer/footer'
import Home from './front-end/pages/home'; 
import Services from './front-end/pages/services'; 
import Contact from './front-end/pages/contact'; 
import Works from './front-end/pages/works'; 
import Culture from './front-end/pages/culture'; 

function App() {
  const footerRef = useRef(null); // Ref untuk footer di Home

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll dengan animasi halus
    }
  };

  return (
    <Router>
      {/* Tambahkan prop scrollToFooter ke Navbar */}
      <Navbar scrollToFooter={scrollToFooter} />
      <Routes>
        <Route path="/" element={<Home footerRef={footerRef} />} /> {/* Kirim footerRef ke Home */}
        <Route path="/services" element={<Services footerRef={footerRef} />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/works" element={<Works footerRef={footerRef} />} /> 
        <Route path="/culture" element={<Culture footerRef={footerRef} />} /> 
      </Routes>
    </Router>
    
  );
}

export default App;
