import React from 'react';

// PUBLIC_INTERFACE
function Footer() {
  /**
   * Renders the footer section of the BabySense Dashboard.
   * Includes copyright notice and essential links.
   * Aligned with UI Blueprint section 9.
   */
  return (
    <footer className="footer">
      <p className="footer-copyright">
        © {new Date().getFullYear()} BabySense. All rights reserved. A gentle embrace for peace of mind.
      </p>
      <nav className="footer-links">
        <a href="#support">Support</a>
        <a href="#faq">FAQ</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </nav>
    </footer>
  );
}

export default Footer;
