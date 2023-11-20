import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="logo">
        <h2>Divyanshu Naudiyal</h2>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="project">Projects</Link>
        <Link to="contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
