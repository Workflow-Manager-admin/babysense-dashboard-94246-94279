import React from 'react';
import EventItem from './EventItem';

// PUBLIC_INTERFACE
function EventTimelineSection() {
  /**
   * Renders the Event Timeline section, displaying a chronological feed of
   * important events, alerts, and tips.
   * Aligned with UI Blueprint section 6.
   */

  const handleEventClick = (message) => {
    // Placeholder for action when an event item is clicked
    console.log(`Event clicked: ${message}`);
  };

  return (
    <section className="event-timeline-section card"> {/* Applying .card for consistency */}
      <h2 className="event-timeline-title">Activity Feed & Gentle Nudges</h2>
      <div className="event-list">
        <EventItem
          type="alert"
          icon="🔔" // Custom icon overrides default for type
          message="Room temperature is a bit warm (24°C)."
          details="Consider adjusting the thermostat or ventilation."
          timestamp="Just now"
          onClick={() => handleEventClick("Temperature Alert")}
        />
        <EventItem
          type="tip"
          message="White noise can help soothe Charlie during naptime."
          details="Explore different sounds in the 'Soothing Sounds' section."
          timestamp="10m ago"
          onClick={() => handleEventClick("Naptime Tip")}
        />
        <EventItem
          type="log"
          icon="Diaper icon" // Placeholder, replace with actual icon later e.g. 💩 or SVG
          message="Diaper change logged."
          details="Type: Wet, Notes: Standard"
          timestamp="35m ago"
        />
        <EventItem
          type="alert"
          icon="✨" // Using blueprint example
          message="High activity detected! Charlie might be awake."
          timestamp="1h ago"
          onClick={() => handleEventClick("Activity Alert")}
        />
        <EventItem
          type="log"
          icon="🍼" // Bottle icon
          message="Feeding logged: 120ml Formula"
          timestamp="2h ago"
        />
        <EventItem
          type="alert"
          icon="🔊" // Sound wave icon
          message="Crying detected. Checking in might be good."
          details="Sound level: Moderate"
          timestamp="2h 5m ago"
          onClick={() => handleEventClick("Crying Alert")}
        />
      </div>
    </section>
  );
}

export default EventTimelineSection;
