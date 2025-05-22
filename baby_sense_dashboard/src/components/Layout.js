import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';
import TopBar from './TopBar';
import Footer from './Footer';
import AlertsArea from './AlertsArea'; // Import AlertsArea

// PUBLIC_INTERFACE
function Layout() {
  /**
   * Defines the main layout structure of the application.
   * It includes the SideNav, TopBar, Footer, and a main content area
   * where routed page components will be rendered via <Outlet>.
   * It also manages the collapsed state of the sidebar.
   */
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={`app-shell ${isSidebarCollapsed ? 'sidebar-collapsed-app' : ''}`}>
      <SideNav isCollapsed={isSidebarCollapsed} />
      <div className={`main-layout ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <TopBar onToggleSidebar={toggleSidebar} />
        <AlertsArea /> {/* Alerts will appear at the top of all routed content */}
        <main className="main-content"> {/* Ensure main-content class is applied here */}
          <Outlet /> {/* Routed page components will render here */}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
