import React from 'react';
import ChartPanel from './ChartPanel';
// import './App.css'; // Styles are in App.css globally

// PUBLIC_INTERFACE
function ChartsSection() {
  /**
   * Renders the Charts section, which displays various data visualizations
   * in ChartPanel components.
   */
  return (
    <section className="charts-section content-container">
      <ChartPanel title="Charlie's Sleep Journey This Week" />
      <ChartPanel title="Today's Wiggles and Giggles" />
      {/* Add more ChartPanel components as needed, e.g., Heartbeat Rhythm */}
      {/* <ChartPanel title="Heartbeat Rhythm - Last 6 Hours" /> */}
    </section>
  );
}

export default ChartsSection;
