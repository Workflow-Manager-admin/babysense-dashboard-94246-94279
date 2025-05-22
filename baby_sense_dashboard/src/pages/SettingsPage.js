import React from 'react';

// PUBLIC_INTERFACE
function SettingsPage() {
  /**
   * Placeholder page for Settings.
   * This page will allow users to configure application settings, manage profiles, etc.
   */
  return (
    <div className="page-container">
      <h1>Settings</h1>
      <p>Application settings, profile management, and device configurations will be available here.</p>
      
      <div className="card" style={{ marginTop: '20px', padding: '20px' }}>
        <h3>Notification Preferences</h3>
        <label style={{ display: 'block', margin: '10px 0' }}>
          <input type="checkbox" defaultChecked /> Enable sound alerts
        </label>
        <label style={{ display: 'block', margin: '10px 0' }}>
          <input type="checkbox" defaultChecked /> Enable temperature alerts
        </label>
        <label style={{ display: 'block', margin: '10px 0' }}>
          <input type="checkbox" /> Enable movement alerts
        </label>
      </div>

      <div className="card" style={{ marginTop: '20px', padding: '20px' }}>
        <h3>Baby Profile</h3>
        <p>Name: Charlie</p>
        <p>Date of Birth: October 1st, 2023</p>
        <button className="btn btn-primary" style={{ marginTop: '10px' }}>Edit Profile</button>
      </div>
       <div className="card" style={{ marginTop: '20px', padding: '20px' }}>
        <h3>Account</h3>
        <p>Email: parent@example.com</p>
        <button className="btn" style={{ marginTop: '10px', marginRight: '10px' }}>Change Password</button>
        <button className="btn" style={{ marginTop: '10px' }}>Logout</button>
      </div>
    </div>
  );
}

export default SettingsPage;
