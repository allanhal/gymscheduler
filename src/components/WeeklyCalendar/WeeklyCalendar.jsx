import React, { useState, useEffect } from 'react';
import { format, startOfWeek, addDays, startOfDay, addHours, eachDayOfInterval, endOfWeek, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon } from 'lucide-react';
import { EMPLOYEES, INITIAL_EVENTS } from '../../data/mockData';
import EmployeeList from '../EmployeeList/EmployeeList';
import TimeSlot from '../TimeSlot/TimeSlot';
import './WeeklyCalendar.css';

const HOURS = Array.from({ length: 24 }, (_, i) => i);

const WeeklyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [events] = useState(INITIAL_EVENTS);
  const [hoveredEmployeeId, setHoveredEmployeeId] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const startDate = startOfWeek(currentDate, { weekStartsOn: 0 });
  const endDate = endOfWeek(currentDate);
  const weekDays = eachDayOfInterval({ start: startDate, end: endDate });

  const nextWeek = () => setCurrentDate(addDays(currentDate, 7));
  const prevWeek = () => setCurrentDate(addDays(currentDate, -7));
  const goToToday = () => {
    const today = new Date();
    setCurrentDate(today);
  };

  const formatHour = (hour) => {
    return format(addHours(startOfDay(new Date()), hour), 'HH:00');
  };

  const getEventsForSlot = (day, hour) => {
    return events.filter(e => isSameDay(e.day, day) && e.hour === hour);
  };

  return (
    <div className="app-layout">
      <EmployeeList 
        employees={EMPLOYEES} 
        onHoverEmployee={setHoveredEmployeeId}
      />
      
      <main className="calendar-container animate-fade-in">
        <header className="calendar-header">
          <div className="header-left">
            <div className="icon-box">
              <CalendarIcon size={24} />
            </div>
            <div>
              <h1 className="calendar-title">Weekly Schedule</h1>
              <p className="calendar-subtitle">{format(startDate, 'MMMM yyyy')}</p>
            </div>
          </div>

          <div className="nav-controls">
            <button onClick={prevWeek} className="nav-btn" aria-label="Previous week">
              <ChevronLeft size={20} />
            </button>
            <button onClick={goToToday} className="nav-btn today-btn">
              Today
            </button>
            <button onClick={nextWeek} className="nav-btn" aria-label="Next week">
              <ChevronRight size={20} />
            </button>
          </div>
        </header>

        <div className="calendar-grid-card">
          <div className="calendar-unified-grid premium-scroll">
            {/* Header Row */}
            <div className="sticky-header-cell time-header-cell">
              <Clock size={16} />
            </div>
            {weekDays.map((day) => {
              const active = isSameDay(day, new Date());
              return (
                <div key={day.toString()} className={`sticky-header-cell day-cell ${active ? 'active' : ''}`}>
                  <span className="day-name">{format(day, 'EEE')}</span>
                  <span className="day-number">{format(day, 'd')}</span>
                </div>
              );
            })}

            {/* Grid Body */}
            {HOURS.map((hour) => (
              <React.Fragment key={hour}>
                <div className="time-label">{formatHour(hour)}</div>
                {weekDays.map((day, dayIndex) => (
                  <TimeSlot 
                    key={`${dayIndex}-${hour}`}
                    day={day}
                    hour={hour}
                    currentTime={currentTime}
                    events={getEventsForSlot(day, hour)}
                    employees={EMPLOYEES}
                    hoveredEmployeeId={hoveredEmployeeId}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default WeeklyCalendar;
