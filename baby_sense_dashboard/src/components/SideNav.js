import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// PUBLIC_INTERFACE
function NavItem({ icon, text, to, isCollapsed }) {
  /**
   * Renders a single navigation item for the SideNav using React Router's NavLink.
   *
   * @param {object} props - Component props.
   * @param {string} props.icon - Icon for the navigation item.
   * @param {string} props.text - Text label for the navigation item.
   * @param {string} props.to - The path to navigate to.
   * @param {boolean} props.isCollapsed - Whether the sidebar is collapsed.
   */
  const location = useLocation();
  // The active state will be primarily determined by NavLink's own `activeClassName` or `style` prop,
  // but we can also rely on CSS targeting `li.nav-item.active` if NavLink adds a class to the `a` tag.
  // For this implementation, we keep the `li` active class logic for CSS compatibility.
  const isActive = location.pathname === to || (to === "/" && location.pathname === "/");


  return (
    <li className={`nav-item ${isActive ? 'active' : ''}`}>
      <NavLink to={to} title={text} end={to === '/'}>
        <span className="nav-icon">{icon}</span>
        {!isCollapsed && <span className="nav-text">{text}</span>}
      </NavLink>
    </li>
  );
}

// PUBLIC_INTERFACE
function SideNav({ isCollapsed }) {
  /**
   * Renders the side navigation bar for the BabySense Dashboard.
   * Contains links to different sections of the dashboard.
   * @param {object} props - Component props.
   * @param {boolean} props.isCollapsed - Whether the sidebar is collapsed.
   */

  const navItems = [
    { icon: '🧸', text: 'Dashboard', to: '/' },
    { icon: '😴', text: 'Sleep Insights', to: '/sleep-insights' },
    { icon: '👣', text: 'Activity Tracker', to: '/activity-tracker' },
    { icon: '🩺', text: 'Health Metrics', to: '/health-metrics' },
    { icon: '🔔', text: 'Notifications', to: '/notifications' },
    { icon: '⚙️', text: 'Settings', to: '/settings' },
  ];

  return (
    <nav className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <NavLink to="/" className="sidebar-logo-link" title="BabySense Home">
          <span className="sidebar-logo-icon">🍼</span>
          {!isCollapsed && <h1 className="sidebar-title">BabySense</h1>}
        </NavLink>
      </div>
      <ul className="nav-list">
        {navItems.map((item) => (
          <NavItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            to={item.to}
            isCollapsed={isCollapsed}
          />
        ))}
      </ul>
      <div className="sidebar-footer">
        {!isCollapsed && <p>&copy; {new Date().getFullYear()} BabySense</p>}
        {isCollapsed && <p>BS</p>}
      </div>
    </nav>
  );
}

// Small style adjustment for the Link in NavItem to fill the space
const style = document.createElement('style');
style.innerHTML = `
  .nav-item > a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: var(--spacing-sm) ${'calc(var(--spacing-md) - 4px)'}; /* Adjust padding to account for border */
    text-decoration: none;
    color: inherit; /* Inherit color from .nav-item */
  }

  .sidebar.collapsed .nav-item > a {
    justify-content: center;
    padding: var(--spacing-sm);
  }

  .nav-item.active > a {
     color: var(--text-color-primary); /* Ensure active link text is correct */
  }
   .sidebar-logo-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    text-decoration: none;
    color: inherit;
  }
`;
document.head.appendChild(style);

export default SideNav;
