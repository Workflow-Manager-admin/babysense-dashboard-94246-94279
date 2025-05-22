import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // Main styles including theme and layout

// Import the new Layout component
import Layout from './components/Layout';

// Import page components
import DashboardPage from './pages/DashboardPage';
import SleepInsightsPage from './pages/SleepInsightsPage';
import ActivityTrackerPage from './pages/ActivityTrackerPage';
import HealthMetricsPage from './pages/HealthMetricsPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main application component for the BabySense Dashboard.
   * It sets up the routing structure for the application.
   * The Layout component wraps all page routes to provide the common UI shell.
   */
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Nested routes will render inside Layout's <Outlet> */}
        <Route index element={<DashboardPage />} /> {/* Default page for "/" */}
        <Route path="sleep-insights" element={<SleepInsightsPage />} />
        <Route path="activity-tracker" element={<ActivityTrackerPage />} />
        <Route path="health-metrics" element={<HealthMetricsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        {/* Add a fallback route for unmatched paths if necessary */}
        {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
