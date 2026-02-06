import React from 'react';
import './EmployeeList.css';

const EmployeeList = ({ employees }) => {
  return (
    <aside className="employee-list-container">
      <h2 className="employee-list-title">Team</h2>
      <div className="employee-items">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-item">
            <span 
              className="employee-color-dot" 
              style={{ color: employee.color, backgroundColor: employee.color }}
            />
            <span className="employee-name">{employee.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default EmployeeList;
