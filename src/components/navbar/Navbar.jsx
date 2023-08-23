import React, { useEffect, useState }  from 'react';
import images from '../../assets/emcp logo w writing.png';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  useEffect(() => {
    const item = document.getElementById("items");
    item.style.left = menuOpen ? '0' : '-400px';
    const shade = document.getElementById("shade");
    shade.style.display = menuOpen ? 'block' : 'none';
  }, [menuOpen]);

  return (
    
    <div className="nav">
      <img src={images} alt="EMCMP" />
      <div className="baras">
        <ul id="items">
          <div id="menuitems">
          <li><Link to="/">Home</Link></li>
          <li><a href="Services.js">Services</a></li>
          <li><Link to="/industries">Industries</Link></li>
          <li><Link to='/news'>News</Link></li>
          <li><Link to='/about'>About us</Link></li>
          <li><Link to='/team'>The Team</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          </div>
        </ul>
        
      </div>
      <i id="bar" className="fa-solid fa-bars" onClick={toggleMenu}>
      </i>
      <div id="shade"></div>
    </div>
    
  );
}

export default Navbar;