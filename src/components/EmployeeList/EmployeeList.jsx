import React from 'react';
import './EmployeeList.css';

const EmployeeList = ({ employees, onHoverEmployee, hoveredEmployeeId }) => {
  return (
    <aside className="employee-list-container">
      <h2 className="employee-list-title">Team</h2>
      <div className="employee-items">
        {employees.map((employee) => {
          const isHighlighted = hoveredEmployeeId === employee.id;
          const isDimmed = hoveredEmployeeId && !isHighlighted;
          const color = employee.color;

          return (
            <div
              key={employee.id}
              className={`employee-item ${isHighlighted ? 'highlighted' : ''}`}
              onMouseEnter={() => onHoverEmployee(employee.id)}
              onMouseLeave={() => onHoverEmployee(null)}
              style={{
                opacity: isDimmed ? 0.3 : 1,
                background: isHighlighted 
                  ? `linear-gradient(135deg, ${color}, ${color}dd)` 
                  : `${color}15`,
                color: isHighlighted ? employee.textColor : 'var(--color-text-primary)',
                borderColor: isHighlighted ? color : `${color}30`,
                borderWidth: '1px',
                borderStyle: 'solid'
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
              <span className="employee-name" style={{ color: 'inherit' }}>{employee.name}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default EmployeeList;
