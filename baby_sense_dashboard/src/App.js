import React from 'react';
import './App.css'; // Main styles including theme and layout

// Import new layout components
import SideNav from './components/SideNav';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';

// Import existing content sections
import QuickGlanceSection from './components/QuickGlanceSection';
import ChartsSection from './components/ChartsSection';
import EventTimelineSection from './components/EventTimelineSection';
import Footer from './components/Footer'; // Footer might be part of MainContent or App shell

// Placeholder for new components to be integrated later
import AlertsArea from './components/AlertsArea';
// import ProfileModule from './components/ProfileModule'; // Profile module is often a popover from TopBar


// PUBLIC_INTERFACE
function App() {
  /**
   * Main application component for the BabySense Dashboard.
   * It sets up the overall layout using SideNav, TopBar, and MainContent.
   */
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  // This function would ideally be in TopBar and passed up, or via context
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={`app-shell ${isSidebarCollapsed ? 'sidebar-collapsed-app' : ''}`}>
      <SideNav isCollapsed={isSidebarCollapsed} />
      <div className={`main-layout ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <TopBar onToggleSidebar={toggleSidebar} /> {/* Pass toggle function to TopBar */}
        <MainContent>
          <AlertsArea /> {/* Alerts will appear at the top of the content */}
          <QuickGlanceSection />
          <ChartsSection />
          <EventTimelineSection />
          {/* ProfileModule would typically be triggered from TopBar, e.g. in a dropdown/modal */}
        </MainContent>
        <Footer />
      </div>
    </div>
  );
}

export default App;
