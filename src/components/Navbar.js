import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional

function Navbar() {
  return (
    <div className="navbar">
      <div><strong>🍽️ MyRecipeApp</strong></div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/recommend">Suggest Recipe</Link>
      </div>
    </div>
  );
}

export default Navbar;

