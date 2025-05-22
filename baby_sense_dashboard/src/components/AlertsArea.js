import React from 'react';

// PUBLIC_INTERFACE
function AlertsArea({ alerts }) {
  /**
   * Renders an area for displaying critical or important alerts.
   * This is a conceptual component as per UI Blueprint.
   *
   * @param {object} props - Component props.
   * @param {Array<object>} [props.alerts] - Array of alert objects.
   *                                         Each alert: { id, message, type: 'critical' | 'warning' | 'info' }
   */

  const defaultAlerts = [
    { id: 'temp1', message: "Room temperature is too high (26°C)! Please check.", type: 'critical' },
    { id: 'sound1', message: "Prolonged crying detected. Baby may need attention.", type: 'warning' },
  ];

  const currentAlerts = alerts || defaultAlerts;

  if (!currentAlerts || currentAlerts.length === 0) {
    return null; // Don't render if no alerts
  }

  return (
    <div className="alerts-area-container">
      {currentAlerts.map(alert => (
        <div key={alert.id} className={`alert-banner alert-${alert.type}`}>
          <span className="alert-icon">
            {alert.type === 'critical' ? '❗' : alert.type === 'warning' ? '⚠️' : 'ℹ️'}
          </span>
          <p className="alert-message">{alert.message}</p>
          <button className="alert-dismiss-btn" title="Dismiss alert">&times;</button>
        </div>
      ))}
    </div>
  );
}

export default AlertsArea;
