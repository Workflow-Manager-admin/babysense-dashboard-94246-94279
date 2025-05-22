// PUBLIC_INTERFACE
/**
 * Mock data for charting examples.
 * This data is used to populate the charts in the BabySense Dashboard
 * for development and demonstration purposes.
 */

// Sleep Data: Represents hours of sleep and number of naps per day for a week.
export const mockSleepData = [
  { day: 'Mon', hours: 7, naps: 2, color: 'var(--accent-gentle-pink)' },
  { day: 'Tue', hours: 6.5, naps: 1, color: 'var(--accent-gentle-pink)' },
  { day: 'Wed', hours: 8, naps: 2, color: 'var(--accent-gentle-pink)' },
  { day: 'Thu', hours: 7.5, naps: 1, color: 'var(--accent-gentle-pink)' },
  { day: 'Fri', hours: 6, naps: 1, color: 'var(--accent-gentle-pink)' },
  { day: 'Sat', hours: 9, naps: 2, color: 'var(--accent-gentle-pink)' },
  { day: 'Sun', hours: 8.5, naps: 2, color: 'var(--accent-gentle-pink)' },
];

// Activity Data: Represents activity levels at different times of the day.
// 'level' could be a qualitative (e.g., 1-10) or quantitative measure.
export const mockActivityData = [
  { time: '8 AM', level: 3, color: 'var(--accent-playful-yellow)' },
  { time: '10 AM', level: 7, color: 'var(--accent-playful-yellow)' },
  { time: '12 PM', level: 4, color: 'var(--accent-playful-yellow)' },
  { time: '2 PM', level: 8, color: 'var(--accent-playful-yellow)' },
  { time: '4 PM', level: 5, color: 'var(--accent-playful-yellow)' },
  { time: '6 PM', level: 3, color: 'var(--accent-playful-yellow)' },
];

// Health Data (Heart Rate): Represents BPM at different times.
export const mockHeartRateData = [
  { time: '00:00', bpm: 115, color: 'var(--accent-warm-peach)' },
  { time: '01:00', bpm: 110, color: 'var(--accent-warm-peach)' },
  { time: '02:00', bpm: 120, color: 'var(--accent-warm-peach)' },
  { time: '03:00', bpm: 118, color: 'var(--accent-warm-peach)' },
  { time: '04:00', bpm: 112, color: 'var(--accent-warm-peach)' },
  { time: '05:00', bpm: 115, color: 'var(--accent-warm-peach)' },
  { time: '06:00', bpm: 125, color: 'var(--accent-warm-peach)' },
];

// Room Conditions Data
export const mockRoomConditionsData = [
    { time: '00:00', temperature: 22, humidity: 45 },
    { time: '01:00', temperature: 22.5, humidity: 47 },
    { time: '02:00', temperature: 23, humidity: 46 },
    { time: '03:00', temperature: 22.8, humidity: 45 },
    { time: '04:00', temperature: 22.5, humidity: 48 },
    { time: '05:00', temperature: 22, humidity: 50 },
    { time: '06:00', temperature: 21.5, humidity: 49 },
];
