import React from 'react';

// Import existing content sections
import QuickGlanceSection from '../components/QuickGlanceSection';
import ChartsSection from '../components/ChartsSection';
import EventTimelineSection from '../components/EventTimelineSection';

// PUBLIC_INTERFACE
function DashboardPage() {
  /**
   * Renders the main dashboard page content.
   * This page includes quick glance statistics, charts, and an event timeline.
   */
  return (
    <>
      <QuickGlanceSection />
      <ChartsSection />
      <EventTimelineSection />
    </>
  );
}

export default DashboardPage;
