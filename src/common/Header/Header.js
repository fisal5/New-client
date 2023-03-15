import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className= 'header'>
      
      <nav className= 'header_nav'>
            <link to="/"> Home </link> | 
            <link to="/about"> About </link> |
            <link to="/Demo"> Demo </link> |
            <link to="/Quiz"> Quiz </link>
          </nav>
      
    </div>
  );
}

export default Header;
