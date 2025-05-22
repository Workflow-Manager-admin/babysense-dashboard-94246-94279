import React from 'react';
// import './App.css'; // Styles are in App.css globally

// PUBLIC_INTERFACE
function EventItem({ icon, message, timestamp, iconColor }) {
  /**
   * Renders a single item in the event timeline or notification list.
   * Displays an icon, a message, and a timestamp.
   *
   * @param {object} props - The properties for the component.
   * @param {string} props.icon - Placeholder text or character for the icon.
   * @param {string} props.message - The event or notification message.
   * @param {string} props.timestamp - The time the event occurred.
   * @param {string} [props.iconColor] - Optional color for the icon.
   */
  return (
    <div className="event-item">
      <div className="event-item-icon" style={{ color: iconColor || 'var(--accent-playful-yellow)'}}>
        {icon || "[i]"} {/* Default placeholder */}
      </div>
      <div className="event-item-message">{message}</div>
      <div className="event-item-timestamp">{timestamp}</div>
    </div>
  );
}

export default EventItem;
