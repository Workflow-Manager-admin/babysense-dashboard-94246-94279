import React from 'react';
// import './App.css'; // Styles are in App.css globally

// PUBLIC_INTERFACE
function Footer() {
  /**
   * Renders the footer section of the application.
   * Includes copyright information and links to support, FAQ, etc.
   */
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} BabySense. All rights reserved. Sweet Dreams!</p>
      <div className="footer-links">
        <a href="#support">Support</a> |
        <a href="#faq">FAQ</a> |
        <a href="#privacy">Privacy Policy</a> |
        <a href="#terms">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
