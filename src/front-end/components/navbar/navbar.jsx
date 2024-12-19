import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

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
        <Link to="/CULTURE">CULTURE</Link>
        <button onClick={scrollToFooter}>CONTACT</button>
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
        <Link to="/CULTURE">CULTURE</Link>
        <button onClick={scrollToFooter} className='buttonActive'>CONTACT</button>
      </nav>
    </header>
  );
};

export default Navbar;
