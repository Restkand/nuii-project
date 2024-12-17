// import React, { useState } from 'react';
// import './navbar.css';

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="header sticky top-0">
//       <div className="logo">
//         <span className="text-[#D2AA5C]">N</span>U
//         <span className="text-purple">i</span>
//         <span className="text-orange">i</span>

//         {/* <span className="text-[#D2AA5C]">N</span>U<span className='text-purple-500'>i</span><span className='text-orange-500'>i</span>
//         <span className="text-[#D2AA5C]">N</span><span className="text-[#34495E]">U</span><span className='text-purple-500'>i</span><span className='text-orange-500'>i</span> */}
//       </div>

//       {/* Desktop*/}
//       <nav className="nav_right">
//         <a href="/services">SERVICES</a>
//         <a href="/works">WORKS</a>
//         <a href="/stories">STORIES</a>
//         <a href="/culture">CULTURE</a>
//         <a href="/career">CAREER</a>
//         <a href="/contact">CONTACT</a>
//       </nav>

//       {/*Mobile */}
//       <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>
//       <nav className={`nav ${menuOpen ? 'active' : ''}`}>
//         <a href="/services">SERVICES</a>
//         <a href="/works">WORKS</a>
//         <a href="/stories">STORIES</a>
//         <a href="/culture">CULTURE</a>
//         <a href="/career">CAREER</a>
//         <a href="/contact">CONTACT</a>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './navbar.css'; // Import CSS for styling

const Navbar = ({ scrollToFooter }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header sticky top-0">
      <Link to="/">
        <div className="logo">
          <span className="text-[#0DB770]">N</span>U
          <span className="text-purple">i</span>
          <span className="text-orange">i</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="nav_right">
        <Link to="/services">SERVICES</Link>
        <Link to="/works">WORKS</Link>
        <button onClick={scrollToFooter}>CONTACT</button> {/* Panggil scrollToFooter */}
      </nav>

      {/* Mobile Navigation */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <Link to="/services">SERVICES</Link>
        <Link to="/works">WORKS</Link>
        <button onClick={scrollToFooter}>CONTACT</button> {/* Panggil scrollToFooter */}
      </nav>
    </header>
  );
};

export default Navbar;
