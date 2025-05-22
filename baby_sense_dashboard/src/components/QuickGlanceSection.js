import React from 'react';
import StatsCard from './StatsCard';
// import './App.css'; // Styles are in App.css globally

// PUBLIC_INTERFACE
function QuickGlanceSection() {
  /**
   * Renders the Quick Glance section, which displays a series of StatsCards
   * providing an overview of the baby's current status.
   */
  return (
    <section className="quick-glance-section content-container">
      <StatsCard
        icon="🌙" // Example: Crescent moon with stars
        title="Sweet Dreams!"
        stat="8h 30m"
        subtext="Total sleep last night"
        iconColor="var(--accent-gentle-pink)"
      />
      <StatsCard
        icon="👣" // Example: Baby footprints
        title="Play Time!"
        stat="Active"
        subtext="Currently"
        iconColor="var(--accent-playful-yellow)"
      />
      <StatsCard
        icon="🌡️" // Example: Thermometer
        title="Feeling Good?"
        stat="36.8°C"
        subtext="Body Temperature"
        iconColor="var(--accent-warm-peach)"
      />
       {/* Add a fourth card for Tummy Time as per blueprint, if space allows or for demo */}
       <StatsCard
        icon="🍼" // Example: Baby bottle
        title="Tummy Time!"
        stat="Last fed: 2h ago"
        subtext="Next estimated: 1h"
        iconColor="var(--accent-gentle-pink)"
      />
    </section>
  );
}

export default QuickGlanceSection;
