import React from 'react';

// PUBLIC_INTERFACE
function EventItem({ type = 'log', icon, message, details, timestamp, onClick }) {
  /**
   * Renders a single item in the event timeline or notification list.
   * Displays an icon, a message, optional details, and a timestamp.
   * Styling and icon can vary based on the event 'type' (log, alert, tip).
   * Aligned with UI Blueprint section 6.
   *
   * @param {object} props - The properties for the component.
   * @param {'log' | 'alert' | 'tip'} [props.type='log'] - Type of event item.
   * @param {string | React.ReactNode} props.icon - Icon for the event.
   * @param {string} props.message - The main event or notification message.
   * @param {string} [props.details] - Optional additional details for the event.
   * @param {string} props.timestamp - The time the event occurred.
   * @param {function} [props.onClick] - Optional click handler for the item.
   */

  let iconToShow = icon;
  let defaultIconColor = 'var(--accent-playful-yellow)';

  // Assign default icons based on type if not provided
  if (!icon) {
    switch (type) {
      case 'alert':
        iconToShow = '⚠️'; // Warning emoji for alerts
        defaultIconColor = 'var(--accent-gentle-pink)';
        break;
      case 'tip':
        iconToShow = '💡'; // Lightbulb for tips
        defaultIconColor = 'var(--accent-playful-yellow)';
        break;
      case 'log':
      default:
        iconToShow = '📄'; // Document for logs
        defaultIconColor = 'var(--accent-calm-green)';
        break;
    }
  }

  const itemStyle = onClick ? { cursor: 'pointer' } : {};

  return (
    <div
      className={`event-item ${type}`}
      style={itemStyle}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyPress={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      <div className="event-item-icon" style={{ color: defaultIconColor }}>
        {iconToShow}
      </div>
      <div className="event-item-content">
        <p className="event-item-message">{message}</p>
        {details && <p className="event-item-details">{details}</p>}
      </div>
      <div className="event-item-timestamp">{timestamp}</div>
    </div>
  );
}

export default EventItem;
