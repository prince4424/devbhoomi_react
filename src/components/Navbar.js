import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">DEVBHOOMI ESTATES</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => {document.querySelector('.navbar-collapse').classList.remove('show');}}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/our-team" onClick={() => {document.querySelector('.navbar-collapse').classList.remove('show');}}>Our Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => {document.querySelector('.navbar-collapse').classList.remove('show');}}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
