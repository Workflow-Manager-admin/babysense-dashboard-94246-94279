import React from 'react';

// PUBLIC_INTERFACE
function StatsCard({ icon, title, stat, subtext, iconColor, cardClassName, onClick }) {
  /**
   * Renders a single statistics card for the Quick Glance section.
   * Displays an icon, title, main statistic, and contextual sub-text.
   * Enhanced for better styling and interactivity.
   *
   * @param {object} props - The properties for the component.
   * @param {string | React.ReactNode} props.icon - Icon for the card (emoji, SVG, or component).
   * @param {string} props.title - The title of the card (e.g., "Sweet Dreams!").
   * @param {string} props.stat - The main statistic to display (e.g., "8h 30m").
   * @param {string} props.subtext - Contextual information for the stat.
   * @param {string} [props.iconColor] - Optional color for the icon (CSS variable or hex).
   * @param {string} [props.cardClassName] - Optional additional class names for the card.
   * @param {function} [props.onClick] - Optional click handler for the card.
   */
  const cardStyle = onClick ? { cursor: 'pointer' } : {};

  return (
    <div
      className={`stats-card card ${cardClassName || ''}`}
      style={cardStyle}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyPress={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      <div className="stats-card-icon-wrapper">
        <span className="stats-card-icon icon" style={{ color: iconColor || 'var(--accent-warm-peach)' }}>
          {icon || "❓"} {/* Default placeholder icon */}
        </span>
      </div>
      <div className="stats-card-content">
        <h3 className="stats-card-title">{title}</h3>
        <p className="stats-card-stat">{stat}</p>
        <p className="stats-card-subtext">{subtext}</p>
      </div>
      {/* Optional: Quick Action could be added here */}
      {/* e.g., <button className="btn btn-small stats-card-action">View Details</button> */}
    </div>
  );
}

export default StatsCard;
