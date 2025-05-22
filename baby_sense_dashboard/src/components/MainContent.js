import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import page components
import DashboardPage from '../pages/DashboardPage';
import SleepInsightsPage from '../pages/SleepInsightsPage';
import ActivityTrackerPage from '../pages/ActivityTrackerPage';
import HealthMetricsPage from '../pages/HealthMetricsPage';
import NotificationsPage from '../pages/NotificationsPage';
import SettingsPage from '../pages/SettingsPage';

// Import common components like AlertsArea
import AlertsArea from './AlertsArea';

// PUBLIC_INTERFACE
function MainContent() {
  /**
   * Renders the main content area of the dashboard.
   * This component now defines the application's routes using
   * <Routes> and <Route> from react-router-dom.
   * It renders different page components based on the current URL.
   */
  return (
    <main className="main-content">
      <AlertsArea /> {/* Alerts will appear at the top of all routed content */}
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/sleep-insights" element={<SleepInsightsPage />} />
        <Route path="/activity-tracker" element={<ActivityTrackerPage />} />
        <Route path="/health-metrics" element={<HealthMetricsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        {/* Add a fallback route for unmatched paths if necessary */}
        {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
      </Routes>
    </main>
  );
}

export default MainContent;
