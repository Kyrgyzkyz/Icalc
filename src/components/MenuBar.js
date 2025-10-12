
import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";






function MenuBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary sticky-top">
      <div className="container-fluid">
        {/* Brand / Logo */}
        <NavLink className="navbar-brand fw-bold" to="/">
          Menu
        </NavLink>

        {/* Toggle button for phones */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <NavLink style={{
    fontFamily:"'Dancing Script', cursive",
    fontSize: "18px",
    fontWeight: 400,
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
              <NavLink className="nav-link" to="/carpet">
                Carpet
            
            
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/curtain">
                Curtain
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sofa">
                Sofa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ac">
                AC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mattress">
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
