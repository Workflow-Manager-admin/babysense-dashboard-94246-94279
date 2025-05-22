import React from 'react';

// PUBLIC_INTERFACE
function TopBar({ onToggleSidebar }) {
  /**
   * Renders the top bar for the BabySense Dashboard.
   * Includes a sidebar toggle, the dashboard title,
   * and action buttons like settings and profile.
   * @param {object} props - Component props.
   * @param {function} props.onToggleSidebar - Function to toggle the sidebar's collapsed state.
   */
  return (
    <header className="top-bar">
      <div className="top-bar-title-section">
        <button 
          onClick={onToggleSidebar} 
          className="settings-button" // Re-use style for consistency
          title="Toggle Sidebar"
          style={{ marginRight: '10px' }}
        >
          <span className="icon">☰</span> {/* Hamburger icon for toggle */}
        </button>
        {/* <span className="top-bar-logo-icon">👶</span> Optional: if logo is different from sidebar */}
        <h2 className="top-bar-title">Charlie's Cozy Corner</h2>
        {/* Placeholder for Baby Profile Switcher */}
        {/* <div className="profile-switcher-placeholder">
          <span>Viewing [Baby's Name]</span>
          <span className="icon">▼</span>
        </div> */}
      </div>
      <div className="top-bar-actions">
        {/* Placeholder for Parental Settings/Account Icon */}
        <button className="settings-button" title="Settings" onClick={() => console.log('Settings clicked')}>
          <span className="icon">🛠️</span> {/* Hammer and Wrench for Settings */}
          {/* <span className="settings-button-text">Settings</span> */}
        </button>
        {/* Profile Button to toggle Profile Module (conceptual) */}
        <button className="profile-button" title="View Profile" onClick={() => console.log('Profile button clicked - toggle ProfileModule here')}>
            <span className="icon">🧸</span> {/* Teddy Bear for Profile */}
        </button>
        {/* Conceptual: ProfileModule could be rendered here conditionally */}
        {/* {isProfileModuleOpen && <ProfileModule />} */}
      </div>
    </header>
  );
}

export default TopBar;
