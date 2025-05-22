import React from 'react';
import EventItem from '../components/EventItem'; // Re-use EventItem for consistency

// PUBLIC_INTERFACE
function NotificationsPage() {
  /**
   * Placeholder page for Notifications.
   * This page will display a list of all past notifications and alerts.
   */
  return (
    <div className="page-container">
      <h1>Notifications & Alerts</h1>
      <p>A log of all important notifications and alerts.</p>
      <div className="card" style={{ marginTop: '20px', padding: '20px' }}>
        <EventItem
            type="alert"
            icon="🌡️"
            message="Room temperature was high (25°C)."
            details="Occurred yesterday."
            timestamp="Yesterday, 3:00 PM"
        />
        <EventItem
            type="tip"
            icon="💡"
            message="Remember to check diaper supplies."
            details="Low stock detected by smart nursery (conceptual)."
            timestamp="2 days ago"
        />
         <EventItem
            type="log"
            icon="🩺"
            message="Health check-up reminder."
            details="Scheduled for next week."
            timestamp="3 days ago"
        />
      </div>
    </div>
  );
}

export default NotificationsPage;
