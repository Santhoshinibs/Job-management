import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./style/Navbar.css";
import Group from "../assets/Group.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const handleCreateJob = () => {
    navigate("/create-job"); // or check auth before navigating
  };

  return (
    <div className="navbar-container">
      {/* Logo */}
      <img src={Group} alt="Logo" className="navbar-logo" />

      {/* Menu */}
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Find Jobs</li>
        <li>Find Talents</li>
        <li>About us</li>
        <li>Testimonials</li>
      </ul>

      {/* Actions */}
      <div className="navbar-actions">
        <button
          className="create-btn"
          onClick={handleCreateJob}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover ? "Login" : "Create Job"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;



