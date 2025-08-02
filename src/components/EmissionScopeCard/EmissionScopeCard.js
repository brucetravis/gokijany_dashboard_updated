import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Filter, Eye, ChevronDown } from 'lucide-react';
import './EmissionScopeCard.css'

const EmissionScopeCard = ({ 
  title = "Emission by Scope",
  data = [],
  dateRange = "2018-2021",
  showFilters = true,
  height = 400,
  colors = {
    scope1: '#008000',
    scope2: '#9ca3af', 
    scope3: '#d1d5db',
    total: '#00a654'
  }
}) => {
  const [selectedDate, setSelectedDate] = useState('Date');
  const [selectedScope, setSelectedScope] = useState('Scope');
  const [selectedView, setSelectedView] = useState('View');
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [scopeDropdownOpen, setScopeDropdownOpen] = useState(false);
  const [viewDropdownOpen, setViewDropdownOpen] = useState(false);

  // Use the data passed as props directly
  const chartData = data;

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{`Year: ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} className="tooltip-item" style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Dropdown options
  const dateOptions = ['2018', '2019', '2020', '2021', '2022', 'All Years'];
  const scopeOptions = ['Scope 1', 'Scope 2', 'Scope 3', 'Total', 'All Scopes'];
  const viewOptions = ['Bar Chart', 'Line Chart', 'Area Chart', 'Monthly', 'Quarterly'];

  const Dropdown = ({ 
    label, 
    icon: Icon, 
    isOpen, 
    setIsOpen, 
    selected, 
    setSelected, 
    options 
  }) => (
    <div className="dropdown-container">
      <button 
        className="dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon size={16} />
        <span>{selected}</span>
        <ChevronDown size={16} className={`dropdown-arrow ${isOpen ? 'open' : ''}`} />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <button
              key={index}
              className="dropdown-item"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  // Add a fallback message if no data is provided
  if (!data || data.length === 0) {
    return (
      <div className="emission-card">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
        <div className="chart-container">
          <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>
            No emission data available
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="emission-card">
      {/* Card Header */}
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        
        {showFilters && (
          <div className="filters-container">
            <Dropdown
              label="Date"
              icon={Calendar}
              isOpen={dateDropdownOpen}
              setIsOpen={setDateDropdownOpen}
              selected={selectedDate}
              setSelected={setSelectedDate}
              options={dateOptions}
            />
            
            <Dropdown
              label="Scope"
              icon={Filter}
              isOpen={scopeDropdownOpen}
              setIsOpen={setScopeDropdownOpen}
              selected={selectedScope}
              setSelected={setSelectedScope}
              options={scopeOptions}
            />
            
            <Dropdown
              label="View"
              icon={Eye}
              isOpen={viewDropdownOpen}
              setIsOpen={setViewDropdownOpen}
              selected={selectedView}
              setSelected={setSelectedView}
              options={viewOptions}
            />
          </div>
        )}
      </div>

      {/* Chart Container */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={height}>
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="year" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#ffffff' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#ffffff' }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="circle"
            />
            
            <Bar 
              dataKey="scope1" 
              name="Scope 1" 
              fill={colors.scope1}
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="scope2" 
              name="Scope 2" 
              fill={colors.scope2}
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="scope3" 
              name="Scope 3" 
              fill={colors.scope3}
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="total" 
              name="Total" 
              fill={colors.total}
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmissionScopeCard;