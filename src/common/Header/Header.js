import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className= 'header'>
      
      <nav className= 'header_nav'>
            <a to="/"> Home </a> | 
            <a to="/about"> About </a> |
            <a to="/Demo"> Demo </a> |
            <a to="/Quiz"> Quiz </a>
          </nav>
      
    </div>
  );
}

export default Header;
