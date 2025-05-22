import React from 'react';

// PUBLIC_INTERFACE
function SettingsPage() {
  /**
   * Allows users to configure application settings, manage baby profiles,
   * and handle account-related actions.
   * Features a prominent header with an icon and title.
   * Content sections are organized within cards for clarity.
   */
  return (
    <div className="page-container">
      <header className="page-header">
        <span className="page-icon">⚙️</span>
        <h1 className="page-title-text">Settings</h1>
      </header>
      <p>
        Customize your BabySense experience. Manage notification preferences,
        update baby profiles, and access account settings here.
      </p>
      
      <div className="card" style={{ marginTop: 'var(--spacing-md)', padding: 'var(--spacing-md)' }}>
        <h3>Notification Preferences</h3>
        <p style={{ marginBottom: 'var(--spacing-sm)' }}>Choose what alerts you want to receive.</p>
        <label style={{ display: 'block', margin: '10px 0', fontFamily: 'var(--font-primary)' }}>
          <input type="checkbox" defaultChecked style={{ marginRight: '8px' }} /> Enable sound alerts
        </label>
        <label style={{ display: 'block', margin: '10px 0', fontFamily: 'var(--font-primary)' }}>
          <input type="checkbox" defaultChecked style={{ marginRight: '8px' }} /> Enable temperature alerts
        </label>
        <label style={{ display: 'block', margin: '10px 0', fontFamily: 'var(--font-primary)' }}>
          <input type="checkbox" style={{ marginRight: '8px' }} /> Enable movement alerts (during non-sleep hours)
        </label>
      </div>

      <div className="card" style={{ marginTop: 'var(--spacing-md)', padding: 'var(--spacing-md)' }}>
        <h3>Baby Profile Management</h3>
        <p style={{ marginBottom: 'var(--spacing-sm)' }}>Keep Charlie's information up to date.</p>
        <p><strong>Name:</strong> Charlie</p>
        <p><strong>Date of Birth:</strong> October 1st, 2023</p>
        
        <p><strong>Avatar:</strong> 👶</p> 
        <button className="btn btn-primary" style={{ marginTop: 'var(--spacing-sm)' }}>Edit Profile</button>
        <button className="btn" style={{ marginTop: 'var(--spacing-sm)', marginLeft: 'var(--spacing-xs)' }}>Add Another Baby</button>
      </div>

       <div className="card" style={{ marginTop: 'var(--spacing-md)', padding: 'var(--spacing-md)' }}>
        <h3>Account Settings</h3>
        <p style={{ marginBottom: 'var(--spacing-sm)' }}>Manage your login and account details.</p>
        <p><strong>Email:</strong> parent@example.com</p>
        <button className="btn" style={{ marginTop: 'var(--spacing-sm)', marginRight: 'var(--spacing-xs)' }}>Change Password</button>
        <button className="btn" style={{ marginTop: 'var(--spacing-sm)' }}>Logout</button>
      </div>

      <div className="placeholder-block" style={{ marginTop: 'var(--spacing-md)'}}>
        <h2>Connected Devices</h2>
        <p>
          Manage connections to smart nursery devices like monitors, sensors, etc.
          (Placeholder for Device Management Interface)
        </p>
      </div>
    </div>
  );
}

export default SettingsPage;
