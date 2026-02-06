import React from 'react';
import { isSameDay } from 'date-fns';
import './TimeSlot.css';

const TimeSlot = ({ day, hour, currentTime, events, employees, hoveredEmployeeId, onHoverEmployee, onToggleEvent, selectedEmployeeId }) => {
  const isToday = isSameDay(day, new Date());
  const isCurrentHour = hour === currentTime.getHours();
  const isHighlighted = hoveredEmployeeId && events.some(e => e.employeeId === hoveredEmployeeId);

  return (
    <div 
      className={`time-slot ${selectedEmployeeId ? 'clickable' : ''}`}
      onClick={() => onToggleEvent(day, hour)}
    >
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
          {events
            .map(event => ({
              ...event,
              employeeName: employees.find(e => e.id === event.employeeId)?.name || ''
            }))
            .sort((a, b) => a.employeeName.localeCompare(b.employeeName))
            .map(event => {
              const employee = employees.find(e => e.id === event.employeeId);
            const color = employee.color;
            const isEventHighlighted = hoveredEmployeeId === event.employeeId;
            const isDimmed = hoveredEmployeeId && !isEventHighlighted;

            return (
              <div
                key={event.id}
                className={`event-box ${isEventHighlighted ? 'highlighted' : ''}`}
                title={`${employee?.name || 'Unknown'}: ${event.label}`}
                onMouseEnter={() => onHoverEmployee(event.employeeId)}
                onMouseLeave={() => onHoverEmployee(null)}
                style={{
                  background: `linear-gradient(135deg, ${color}, ${color}dd)`,
                  boxShadow: `0 4px 12px ${color}33`,
                  opacity: isDimmed ? 0.3 : 1,
                  transform: isEventHighlighted ? 'scale(1.05)' : 'scale(1)',
                  border: isEventHighlighted ? '2px solid white' : 'none',
                  zIndex: isEventHighlighted ? 30 : 1,
                }}
              >
                <span className="event-label" style={{ color: employee.textColor }}>
                  {employee.name.split(' ').map(name => name.charAt(0)).join('')}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TimeSlot;
