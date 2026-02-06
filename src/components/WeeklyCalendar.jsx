import React, { useState, useEffect } from 'react';
import { format, startOfWeek, addDays, startOfDay, addHours, eachDayOfInterval, endOfWeek, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon } from 'lucide-react';

const HOURS = Array.from({ length: 24 }, (_, i) => i);

const WeeklyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

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

  return (
    <div className="calendar-container animate-fade-in">
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
        <div className="days-header">
          <div className="time-header-cell">
            <Clock size={16} />
          </div>
          <div className="days-row">
            {weekDays.map((day) => {
              const active = isSameDay(day, new Date());
              return (
                <div key={day.toString()} className={`day-cell ${active ? 'active' : ''}`}>
                  <span className="day-name">{format(day, 'EEE')}</span>
                  <span className="day-number">{format(day, 'd')}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid-viewport premium-scroll">
          <div className="grid-row">
            <div className="time-column">
              {HOURS.map((hour) => (
                <div key={hour} className="time-label">
                  {formatHour(hour)}
                </div>
              ))}
            </div>

            <div className="days-grid">
              {weekDays.map((day, dayIndex) => (
                <div key={dayIndex} className="day-column">
                  {HOURS.map((hour) => (
                    <div key={hour} className="time-slot">
                      {isSameDay(day, new Date()) && hour === currentTime.getHours() && (
                        <div 
                          className="current-time-line"
                          style={{ top: `${(currentTime.getMinutes() / 60) * 100}%` }}
                        >
                          <div className="current-time-dot" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCalendar;
