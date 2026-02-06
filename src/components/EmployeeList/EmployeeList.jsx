import React from 'react';
import './EmployeeList.css';

const EmployeeList = ({ employees, onHoverEmployee, hoveredEmployeeId, employeeHours, selectedEmployeeId, onSelectEmployee }) => {
  return (
    <aside className="employee-list-container">
      <h2 className="employee-list-title">Team ({employees.length})</h2>
      <div className="employee-items">
        {employees.map((employee) => {
          const isHighlighted = hoveredEmployeeId === employee.id;
          const isSelected = selectedEmployeeId === employee.id;
          const isDimmed = hoveredEmployeeId && !isHighlighted;
          const color = employee.color;
          const hours = employeeHours[employee.id] || 0;

          return (
            <div
              key={employee.id}
              className={`employee-item ${isHighlighted ? 'highlighted' : ''} ${isSelected ? 'selected' : ''}`}
              onMouseEnter={() => onHoverEmployee(employee.id)}
              onMouseLeave={() => onHoverEmployee(null)}
              onClick={() => onSelectEmployee(isSelected ? null : employee.id)}
              style={{
                opacity: isDimmed ? 0.3 : 1,
                background: isSelected
                  ? `linear-gradient(135deg, ${color}, ${color}dd)`
                  : (isHighlighted ? `${color}40` : `${color}15`),
                color: (isSelected || isHighlighted) ? employee.textColor : 'var(--color-text-primary)',
                borderColor: (isSelected || isHighlighted) ? color : `${color}30`,
                borderWidth: '1px',
                borderStyle: 'solid',
                transform: isSelected ? 'scale(1.02) translateX(8px)' : (isHighlighted ? 'translateX(4px)' : 'none'),
                zIndex: isSelected ? 10 : 1
              }}
            >
              <span
                className="employee-color-dot"
                style={{
                  color: color,
                  backgroundColor: color,
                  boxShadow: isHighlighted ? 'none' : `0 0 8px ${color}`
                }}
              />
              <div className="employee-info">
                <span className="employee-name" style={{ color: 'inherit' }}>{employee.name}</span>
                <span className="employee-hours">{hours}h</span>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default EmployeeList;
