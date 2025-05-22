import React from 'react';

// PUBLIC_INTERFACE
function ActivityTrackerPage() {
  /**
   * Presents a detailed view of the baby's activity levels, developmental milestones,
   * and play patterns.
   * Features a prominent header with an icon and title.
   * Placeholder blocks are used for future chart, log, and data integrations.
   */
  return (
    <div className="page-container">
      <header className="page-header">
        <span className="page-icon">👣</span>
        <h1 className="page-title-text">Activity Tracker</h1>
      </header>
      <p>
        Keep track of Charlie's movements, playtime, and important developmental
        milestones. This section offers insights into daily activity levels and
        celebrates each new achievement.
      </p>

      <div className="placeholder-block">
        <h2>Daily Activity Levels</h2>
        <p>
          Monitor periods of high and low activity throughout the day.
          Understand active versus restful states.
          (Placeholder for Daily Activity Chart/Log)
        </p>
      </div>

      <div className="placeholder-block">
        <h2>Developmental Milestones</h2>
        <p>
          Log and view key developmental milestones such as first smile,
          rolling over, sitting up, and more.
          (Placeholder for Milestones Log/Timeline)
        </p>
        
        <ul style={{ listStyle: 'disc', marginLeft: '20px', marginTop: '10px' }}>
          <li>First Smile - Oct 20th (Example)</li>
          <li>Rolled Over - Nov 5th (Example)</li>
        </ul>
      </div>

      <div className="placeholder-block">
        <h2>Play & Interaction Patterns</h2>
        <p>
          Note types of play, interactions, and favorite toys or activities.
          (Placeholder for Play Log/Notes)
        </p>
      </div>
    </div>
  );
}

export default ActivityTrackerPage;
