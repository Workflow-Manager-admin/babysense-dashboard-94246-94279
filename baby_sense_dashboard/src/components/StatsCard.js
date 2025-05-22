import React from 'react';
// import './App.css'; // Styles are in App.css globally

// PUBLIC_INTERFACE
function StatsCard({ icon, title, stat, subtext, iconColor }) {
  /**
   * Renders a single statistics card for the Quick Glance section.
   * Displays an icon, title, main statistic, and contextual sub-text.
   *
   * @param {object} props - The properties for the component.
   * @param {string} props.icon - Placeholder text or character for the icon.
   * @param {string} props.title - The title of the card (e.g., "Sweet Dreams!").
   * @param {string} props.stat - The main statistic to display (e.g., "8h 30m").
   * @param {string} props.subtext - Contextual information for the stat (e.g., "Total sleep last night").
   * @param {string} [props.iconColor] - Optional color for the icon.
   */
  return (
    <div className="stats-card">
      <div className="stats-card-icon" style={{ color: iconColor || 'var(--accent-warm-peach)' }}>
        {icon || "[Icon]"} {/* Default placeholder if icon not provided */}
      </div>
      <div className="stats-card-title">{title}</div>
      <div className="stats-card-stat">{stat}</div>
      <div className="stats-card-subtext">{subtext}</div>
    </div>
  );
}

export default StatsCard;
