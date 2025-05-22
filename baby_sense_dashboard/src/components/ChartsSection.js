import React from 'react';
import ChartPanel from './ChartPanel';
import {
  ResponsiveContainer,
  LineChart,
  BarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { mockSleepData, mockActivityData, mockHeartRateData, mockRoomConditionsData } from '../data/mockChartData';

// PUBLIC_INTERFACE
function ChartsSection() {
  /**
   * Renders the Charts section, displaying various data visualizations
   * in ChartPanel components using Recharts.
   * Aligned with UI Blueprint section 5.
   */
  const commonTextStyle = {
    fontFamily: 'var(--font-primary)',
    fontSize: '12px', // Recharts default is often small
    fill: 'var(--text-color-secondary)',
  };

  const commonTooltipStyle = {
    backgroundColor: 'var(--container-background-color)',
    borderColor: 'var(--border-color-soft)',
    borderRadius: 'var(--border-radius-medium)',
    boxShadow: 'var(--shadow-soft)',
  };
  
  const commonLegendStyle = {
    fontFamily: 'var(--font-primary)',
    fontSize: '14px',
    color: 'var(--text-color-primary)',
  };


  return (
    <section className="charts-section">
      <h2 className="section-title">Patterns & Progress</h2>
      <div className="charts-grid">
        <ChartPanel
          title="Charlie's Sleep Journey"
          chartId="sleep-patterns-chart"
        >
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={mockSleepData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color-light)" />
              <XAxis dataKey="day" tick={commonTextStyle} />
              <YAxis tick={commonTextStyle} />
              <Tooltip wrapperStyle={commonTooltipStyle} contentStyle={commonTextStyle} itemStyle={commonTextStyle} cursor={{ fill: 'rgba(0,0,0,0.05)'}}/>
              <Legend wrapperStyle={{ ...commonLegendStyle, paddingTop: '10px' }} />
              <Bar dataKey="hours" fill="var(--accent-gentle-pink)" name="Sleep Hours" radius={[4, 4, 0, 0]}/>
              <Bar dataKey="naps" fill="var(--accent-soft-blue)" name="Naps" radius={[4, 4, 0, 0]}/>
            </BarChart>
          </ResponsiveContainer>
        </ChartPanel>
        <ChartPanel
          title="Today's Wiggles and Giggles"
          chartId="activity-timeline-chart"
        >
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mockActivityData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color-light)" />
              <XAxis dataKey="time" tick={commonTextStyle} />
              <YAxis tick={commonTextStyle} />
              <Tooltip wrapperStyle={commonTooltipStyle} contentStyle={commonTextStyle} itemStyle={commonTextStyle} cursor={{ stroke: 'var(--accent-playful-yellow)', strokeWidth: 1}}/>
              <Legend wrapperStyle={{ ...commonLegendStyle, paddingTop: '10px' }} />
              <Line type="monotone" dataKey="level" name="Activity Level" stroke="var(--accent-playful-yellow)" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartPanel>
        <ChartPanel
          title="Heartbeat Rhythm - Last 6 Hours"
          chartId="heart-rate-chart"
        >
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mockHeartRateData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color-light)" />
              <XAxis dataKey="time" tick={commonTextStyle} />
              <YAxis domain={['dataMin - 5', 'dataMax + 5']} tick={commonTextStyle} />
              <Tooltip wrapperStyle={commonTooltipStyle} contentStyle={commonTextStyle} itemStyle={commonTextStyle} cursor={{ stroke: 'var(--accent-warm-peach)', strokeWidth: 1}} />
              <Legend wrapperStyle={{ ...commonLegendStyle, paddingTop: '10px' }} />
              <Line type="monotone" dataKey="bpm" name="Heart Rate (BPM)" stroke="var(--accent-warm-peach)" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartPanel>
         <ChartPanel
          title="Room Conditions - Last 6 Hours"
          chartId="room-conditions-chart"
        >
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mockRoomConditionsData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color-light)" />
              <XAxis dataKey="time" tick={commonTextStyle} />
              <YAxis yAxisId="left" orientation="left" stroke="var(--accent-calm-green)" tick={commonTextStyle} />
              <YAxis yAxisId="right" orientation="right" stroke="var(--accent-soft-blue)" tick={commonTextStyle} />
              <Tooltip wrapperStyle={commonTooltipStyle} contentStyle={commonTextStyle} itemStyle={commonTextStyle} />
              <Legend wrapperStyle={{ ...commonLegendStyle, paddingTop: '10px' }} />
              <Line yAxisId="left" type="monotone" dataKey="temperature" name="Temperature (°C)" stroke="var(--accent-calm-green)" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              <Line yAxisId="right" type="monotone" dataKey="humidity" name="Humidity (%)" stroke="var(--accent-soft-blue)" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartPanel>
      </div>
    </section>
  );
}

export default ChartsSection;
