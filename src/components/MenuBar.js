
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <nav className="navbar py-1 navbar-expand-sm navbar-dark bg-primary fixed-top">
      <div className="container-fluid">
        {/* Brand / Logo */}
        <NavLink className="navbar-brand fw-bold" to="/">
          Menu
        </NavLink>

        {/* Toggle button for phones */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav" >
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <NavLink style={{
    fontFamily:"'Dancing Script', cursive",
    fontSize: "25px",
    fontWeight: 600,
    color: "#2c3e50",
    letterSpacing: "0.04em",
    userSelect: "none",
    marginBottom: "6px",
    display: "inline-block"
  }} className="nav-link" to="/" end>
                ICleaning
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/carpet" onClick={closeMenu}>
                Carpet
            
            
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/curtain" onClick={closeMenu}>
                Curtain
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sofa" onClick={closeMenu}>
                Sofa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ac" onClick={closeMenu}>
                AC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mattress" onClick={closeMenu}>
                Mattrass
              </NavLink>
            </li>
          </ul>
          
        </div>
        </div>
      
    </nav>
  );
}

export default MenuBar;
