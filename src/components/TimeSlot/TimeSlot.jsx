import React from 'react';
import { isSameDay } from 'date-fns';
import './TimeSlot.css';

const TimeSlot = ({ day, hour, currentTime, events, employees }) => {
  const isToday = isSameDay(day, new Date());
  const isCurrentHour = hour === currentTime.getHours();

  return (
    <div className="time-slot">
      {isToday && isCurrentHour && (
        <div
          className="current-time-line"
          style={{ top: `${(currentTime.getMinutes() / 60) * 100}%` }}
        >
          <div className="current-time-dot" />
        </div>
      )}

      {events.length > 0 && (
        <div className="events-container">
          {events.map(event => {
            const employee = employees.find(e => e.id === event.employeeId);
            const color = employee.color;

            return (
              <div
                key={event.id}
                className="event-box"
                title={`${employee?.name || 'Unknown'}: ${event.label}`}
                style={{
                  background: `linear-gradient(135deg, ${color}, ${color}dd)`,
                  boxShadow: `0 4px 12px ${color}33`,
                }}
              >
                <span className="event-label" style={{ color: employee.textColor }}>{employee.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TimeSlot;
