import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Optional: for custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>EMS</h2>
      <ul>
        <li><NavLink to="/">Employee List</NavLink></li>
        <li><NavLink to="/create">Add Employee</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
