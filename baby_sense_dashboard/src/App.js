import React from 'react';
import './App.css'; // Main styles including theme and layout

// Import new layout components
import SideNav from './components/SideNav';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent'; // MainContent will handle its own children via routes
import Footer from './components/Footer';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main application component for the BabySense Dashboard.
   * It sets up the overall layout using SideNav, TopBar, and MainContent.
   * Routing is handled within MainContent.
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
        <MainContent /> {/* MainContent now renders page components based on routes */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
