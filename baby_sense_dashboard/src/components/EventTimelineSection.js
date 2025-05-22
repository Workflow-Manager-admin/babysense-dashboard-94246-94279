import React from 'react';
import EventItem from './EventItem';
// import './App.css'; // Styles are in App.css globally

// PUBLIC_INTERFACE
function EventTimelineSection() {
  /**
   * Renders the Event Timeline section, displaying a chronological feed of
   * important events, alerts, and tips.
   */
  return (
    <section className="event-timeline-section content-container">
      <h2 className="event-timeline-title">Activity Feed & Gentle Nudges</h2>
      <EventItem
        icon="🔔" // Gentle bell icon
        message="Room temperature is a bit warm (24°C). Consider adjusting."
        timestamp="Just now"
        iconColor="var(--accent-gentle-pink)"
      />
      <EventItem
        icon="💡" // Lightbulb icon
        message="Tip: White noise can help soothe Charlie during naptime."
        timestamp="10m ago"
        iconColor="var(--accent-playful-yellow)"
      />
      <EventItem
        icon="✨" // Sparkle icon
        message="High activity detected! Charlie might be awake."
        timestamp="2:30 PM"
        iconColor="var(--accent-warm-peach)"
      />
       <EventItem
        icon="👶" // Sound wave or baby icon
        message="Crying detected. Checking in might be good."
        timestamp="2:32 PM"
        iconColor="var(--accent-gentle-pink)"
      />
    </section>
  );
}

export default EventTimelineSection;
