import React from 'react';

// PUBLIC_INTERFACE
function MainContent({ children }) {
  /**
   * Renders the main content area of the dashboard.
   * This component acts as a wrapper for the various sections like
   * quick glance stats, charts, and event timelines.
   *
   * @param {object} props - Component props.
   * @param {React.ReactNode} props.children - The child elements to render within the main content area.
   */
  return (
    <main className="main-content">
      {children}
    </main>
  );
}

export default MainContent;
