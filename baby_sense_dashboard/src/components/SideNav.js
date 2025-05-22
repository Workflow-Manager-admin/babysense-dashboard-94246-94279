import React from 'react';

// PUBLIC_INTERFACE
function NavItem({ icon, text, isActive, onClick }) {
  /**
   * Renders a single navigation item for the SideNav.
   *
   * @param {object} props - Component props.
   * @param {string} props.icon - Icon for the navigation item (e.g., emoji or SVG placeholder).
   * @param {string} props.text - Text label for the navigation item.
   * @param {boolean} [props.isActive] - Whether the item is currently active.
   * @param {function} [props.onClick] - Function to call when item is clicked.
   */
  return (
    <li className={`nav-item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <span className="nav-icon">{icon}</span>
      <span className="nav-text">{text}</span>
    </li>
  );
}

// PUBLIC_INTERFACE
function SideNav() {
  /**
   * Renders the side navigation bar for the BabySense Dashboard.
   * Contains links to different sections of the dashboard.
   */
  const [activeItem, setActiveItem] = React.useState('Dashboard');

  const navItems = [
    { icon: '🏠', text: 'Dashboard' },
    { icon: '🌙', text: 'Sleep Insights' },
    { icon: '🤸', text: 'Activity Tracker' },
    { icon: '❤️', text: 'Health Metrics' },
    { icon: '🔔', text: 'Alerts & Log' },
    { icon: '⚙️', text: 'Settings' },
  ];

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-logo-icon">👶</span>
        <h1 className="sidebar-title">BabySense</h1>
      </div>
      <ul className="nav-list">
        {navItems.map((item) => (
          <NavItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            isActive={activeItem === item.text}
            onClick={() => setActiveItem(item.text)}
          />
        ))}
      </ul>
      <div className="sidebar-footer">
        <p>&copy; {new Date().getFullYear()} BabySense</p>
      </div>
    </nav>
  );
}

export default SideNav;
