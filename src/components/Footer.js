import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 <strong>MyRecipeApp</strong>. All rights reserved.</p>
        <p>Built with ❤️ using React, Node.js, and Flask</p>
        <p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a> |
          <a href="mailto:support@myrecipeapp.com"> Contact Us</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;


  