import React, { useState } from 'react';
import { UserPlus, Edit2, Trash2, X, Check, Plus, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import './EmployeeList.css';

const EmployeeList = ({ 
  employees, 
  onHoverEmployee, 
  hoveredEmployeeId, 
  employeeHours, 
  selectedEmployeeId, 
  onSelectEmployee,
  onAddEmployee,
  onUpdateEmployee,
  onDeleteEmployee,
  isRetracted,
  onToggleRetract
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState('add'); // 'add' or 'edit'
  const [formData, setFormData] = useState({ name: '', color: '#6366f1', id: null });

  const openAddForm = () => {
    setFormData({ name: '', color: '#6366f1', id: null });
    setFormMode('add');
    setIsFormOpen(true);
  };

  const openEditForm = (e, employee) => {
    e.stopPropagation();
    setFormData({ name: employee.name, color: employee.color, id: employee.id });
    setFormMode('edit');
    setIsFormOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    if (formMode === 'add') {
      onAddEmployee({ name: formData.name, color: formData.color });
    } else {
      onUpdateEmployee({ ...formData });
    }
    setIsFormOpen(false);
  };

  return (
    <aside className={`employee-list-container ${isRetracted ? 'retracted' : ''}`}>
      <button className="sidebar-toggle-btn" onClick={onToggleRetract} title={isRetracted ? "Expand Sidebar" : "Collapse Sidebar"}>
        <div className="desktop-only-toggle">
          {isRetracted ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </div>
        <div className="mobile-only-toggle">
          {isRetracted ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </div>
      </button>

      <div className="employee-list-header">
        {!isRetracted && <h2 className="employee-list-title">Team ({employees.length})</h2>}
        {!isRetracted && (
          <button className="add-employee-btn desktop-only" onClick={openAddForm} title="Add Team Member">
            <UserPlus size={18} />
          </button>
        )}
      </div>

      {isFormOpen && !isRetracted && (
        <form className="employee-form animate-fade-in" onSubmit={handleSubmit}>
          <div className="form-header">
            <h3>{formMode === 'add' ? 'New Member' : 'Edit Member'}</h3>
            <button type="button" onClick={() => setIsFormOpen(false)} className="close-form-btn">
              <X size={16} />
            </button>
          </div>
          <div className="form-body">
            <input 
              autoFocus
              className="form-input"
              placeholder="Name"
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
            <div className="color-input-wrapper">
              <input 
                type="color"
                className="color-picker"
                value={formData.color}
                onChange={e => setFormData(prev => ({ ...prev, color: e.target.value }))}
              />
              <span className="color-label">{formData.color}</span>
            </div>
          </div>
          <div className="form-footer">
            <button type="submit" className="submit-form-btn">
              <Check size={16} />
              {formMode === 'add' ? 'Add' : 'Save'}
            </button>
          </div>
        </form>
      )}

      {!isRetracted && (
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
                title={isRetracted ? `${employee.name} (${hours}h)` : ""}
                style={{
                  opacity: isDimmed ? 0.3 : 1,
                  background: isSelected
                    ? `linear-gradient(135deg, ${color}, ${color}dd)`
                    : (isHighlighted ? `${color}40` : `${color}15`),
                  color: (isSelected || isHighlighted) ? employee.textColor : 'var(--color-text-primary)',
                  borderColor: (isSelected || isHighlighted) ? color : `${color}30`,
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  transform: !isRetracted && isSelected ? 'scale(1.02) translateX(8px)' : (!isRetracted && isHighlighted ? 'translateX(4px)' : 'none'),
                  zIndex: isSelected ? 10 : 1,
                  justifyContent: isRetracted ? 'center' : 'flex-start',
                  padding: isRetracted ? '10px 0' : '10px 14px'
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
                {!isRetracted && (
                  <div className="employee-info">
                    <div className="name-box">
                      <span className="employee-name" style={{ color: 'inherit' }}>{employee.name}</span>
                      <span className="employee-hours">{hours}h</span>
                    </div>
                    <div className="employee-actions">
                      <button 
                        className="action-icon-btn edit" 
                        onClick={(e) => openEditForm(e, employee)}
                        title="Edit"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button 
                        className="action-icon-btn delete" 
                        onClick={(e) => { e.stopPropagation(); onDeleteEmployee(employee.id); }}
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </aside>
  );
};

export default EmployeeList;
