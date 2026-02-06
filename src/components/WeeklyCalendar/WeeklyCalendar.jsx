import React, { useState, useEffect } from 'react';
import { format, startOfWeek, addDays, startOfDay, addHours, eachDayOfInterval, endOfWeek, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, Download, Upload } from 'lucide-react';
import { EMPLOYEES, INITIAL_EVENTS } from '../../data/mockData';
import EmployeeList from '../EmployeeList/EmployeeList';
import TimeSlot from '../TimeSlot/TimeSlot';
import './WeeklyCalendar.css';

const HOURS = Array.from({ length: 24 }, (_, i) => i);

const WeeklyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [employees, setEmployees] = useState(EMPLOYEES);
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [hoveredEmployeeId, setHoveredEmployeeId] = useState(null);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const fileInputRef = React.useRef(null);
  
  // Operating hours state
  const [startHour, setStartHour] = useState(5);
  const [endHour, setEndHour] = useState(23);

  const handleExport = () => {
    const data = {
      employees,
      events,
      version: '1.0',
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `gym-scheduler-${format(new Date(), 'yyyy-MM-dd')}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.employees && data.events) {
          // Convert date strings back to Date objects
          const restoredEvents = data.events.map(ev => ({
            ...ev,
            day: new Date(ev.day)
          }));
          setEmployees(data.employees);
          setEvents(restoredEvents);
        } else {
          alert('Invalid data format. Please provide a valid scheduler JSON file.');
        }
      } catch (err) {
        alert('Error parsing JSON file.');
        console.error(err);
      }
    };
    reader.readAsText(file);
    // Reset input
    e.target.value = '';
  };

  const HOURS = Array.from(
    { length: Math.max(0, endHour - startHour + 1) }, 
    (_, i) => i + startHour
  );

  const handleToggleEvent = (day, hour) => {
    if (!selectedEmployeeId) return;

    setEvents(prev => {
      const existingIndex = prev.findIndex(e => 
        isSameDay(e.day, day) && e.hour === hour && e.employeeId === selectedEmployeeId
      );

      if (existingIndex > -1) {
        // Remove if exists
        return prev.filter((_, i) => i !== existingIndex);
      } else {
        // Add if not exists
        const newEvent = {
          id: Date.now(),
          employeeId: selectedEmployeeId,
          day: new Date(day),
          hour: hour,
          label: 'New Session'
        };
        return [...prev, newEvent];
      }
    });
  };

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

  const calculateEmployeeHours = () => {
    const hoursMap = {};
    employees.forEach(emp => hoursMap[emp.id] = 0);
    
    events.forEach(event => {
      if (isSameDay(event.day, currentDate) || (event.day >= startDate && event.day <= endDate)) {
        // Since each event is 1 hour in our mock data
        if (hoursMap[event.employeeId] !== undefined) {
          hoursMap[event.employeeId] += 1;
        }
      }
    });
    return hoursMap;
  };

  const employeeHours = calculateEmployeeHours();

  const getEventsForSlot = (day, hour) => {
    return events.filter(e => isSameDay(e.day, day) && e.hour === hour);
  };

  return (
    <div className="app-layout">
      <EmployeeList 
        employees={employees} 
        onHoverEmployee={setHoveredEmployeeId}
        hoveredEmployeeId={hoveredEmployeeId}
        employeeHours={employeeHours}
        selectedEmployeeId={selectedEmployeeId}
        onSelectEmployee={setSelectedEmployeeId}
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
            <div className="action-buttons">
              <button onClick={handleExport} className="action-btn" title="Export JSON">
                <Download size={18} />
              </button>
              <button onClick={() => fileInputRef.current?.click()} className="action-btn" title="Import JSON">
                <Upload size={18} />
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImport} 
                accept=".json" 
                style={{ display: 'none' }} 
              />
            </div>

            <div className="nav-divider" />

            <div className="range-controls">
              <div className="range-input-group">
                <Clock size={14} className="input-icon" />
                <input 
                  type="number" 
                  min="0" 
                  max={endHour - 1} 
                  value={startHour} 
                  onChange={(e) => setStartHour(Math.max(0, parseInt(e.target.value) || 0))} 
                  className="hour-input"
                  title="Start Hour"
                />
                <span className="range-sep">to</span>
                <input 
                  type="number" 
                  min={startHour + 1} 
                  max="23" 
                  value={endHour} 
                  onChange={(e) => setEndHour(Math.min(23, parseInt(e.target.value) || 23))} 
                  className="hour-input"
                  title="End Hour"
                />
              </div>
            </div>

            <div className="nav-divider" />

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
                      employees={employees}
                      hoveredEmployeeId={hoveredEmployeeId}
                      onHoverEmployee={setHoveredEmployeeId}
                      onToggleEvent={handleToggleEvent}
                      selectedEmployeeId={selectedEmployeeId}
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
