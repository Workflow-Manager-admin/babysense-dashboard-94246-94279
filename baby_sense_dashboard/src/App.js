import React from 'react';
import './App.css'; // Main styles including theme
import Header from './components/Header';
import QuickGlanceSection from './components/QuickGlanceSection';
import ChartsSection from './components/ChartsSection';
import EventTimelineSection from './components/EventTimelineSection';
import Footer from './components/Footer';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main application component for the BabySense Dashboard.
   * It structures the dashboard with a header, quick glance stats,
   * chart displays, an event timeline, and a footer.
   */
  return (
    <div className="app-shell">
      <Header />
      <main>
        {/* Content container can be applied to sections or here if all content shares same max-width */}
        <QuickGlanceSection />
        <ChartsSection />
        <EventTimelineSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
