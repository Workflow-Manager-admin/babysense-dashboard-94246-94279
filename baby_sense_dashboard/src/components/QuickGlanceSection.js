import React from 'react';
import StatsCard from './StatsCard';

// PUBLIC_INTERFACE
function QuickGlanceSection() {
  /**
   * Renders the Quick Glance section, displaying prominent StatsCards
   * for a quick overview of the baby's current status.
   * Aligned with UI Blueprint section 4.
   */

  const handleCardClick = (title) => {
    // Placeholder for navigation or opening a detailed panel
    console.log(`Card clicked: ${title}`);
  };

  return (
    <section className="quick-glance-section">
      <h2 className="section-title">At a Glance</h2> {/* Optional: Title for the section */}
      <div className="stats-card-grid">
        <StatsCard
          icon="🌙" // Sleeping moon
          title="Sweet Dreams!"
          stat="8h 30m"
          subtext="Total sleep last night"
          iconColor="var(--accent-gentle-pink)"
          onClick={() => handleCardClick("Sleep Details")}
        />
        <StatsCard
          icon="🤸" // Playful icon (e.g. baby footprints, toy blocks)
          title="Play Time!"
          stat="Active"
          subtext="Currently"
          iconColor="var(--accent-playful-yellow)"
          onClick={() => handleCardClick("Activity Details")}
        />
        <StatsCard
          icon="🌡️" // Thermometer with a smiley face
          title="Feeling Good?"
          stat="36.8°C"
          subtext="Body Temperature"
          iconColor="var(--accent-warm-peach)"
          onClick={() => handleCardClick("Health Vitals")}
        />
        <StatsCard
          icon="🍼" // Baby bottle or nursing icon
          title="Tummy Time!"
          stat="Last fed: 2h ago"
          subtext="Next estimated: 1h"
          iconColor="var(--accent-calm-green)" // Using calm green for feeding
          onClick={() => handleCardClick("Feeding Log")}
        />
      </div>
    </section>
  );
}

export default QuickGlanceSection;
