import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { Calendar, Building } from 'lucide-react';
import './UsageCard.css'

const UsageCard = ({
  title,
  data,
  organizationUnits,
  colors,
  yAxisMax,
  dateFilter,
  orgFilter
}) => {
  const [selectedDate, setSelectedDate] = useState('All Years');
  const [selectedOrg, setSelectedOrg] = useState('All Units');
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false);

  const formatYAxisTick = (value) => {
    if (value >= 1000) {
      return `${value / 1000}k`;
    }
    return value;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{`Year: ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} className="tooltip-item" style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const toggleDateDropdown = () => {
    setIsDateDropdownOpen(!isDateDropdownOpen);
    setIsOrgDropdownOpen(false);
  };

  const toggleOrgDropdown = () => {
    setIsOrgDropdownOpen(!isOrgDropdownOpen);
    setIsDateDropdownOpen(false);
  };

  return (
    <div className="usage-card">
      {/* Header */}
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        
        {/* Filter Controls */}
        <div className="filter-controls">
          {/* Date Filter */}
          <div className="filter-dropdown">
            <button 
              className="filter-button"
              onClick={toggleDateDropdown}
            >
              <Calendar size={16} />
              <span>{dateFilter}</span>
              <svg 
                className={`dropdown-arrow ${isDateDropdownOpen ? 'rotated' : ''}`}
                width="12" 
                height="12" 
                viewBox="0 0 12 12"
              >
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </button>
            {isDateDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-item">2018</div>
                <div className="dropdown-item">2019</div>
                <div className="dropdown-item">2020</div>
                <div className="dropdown-item">2021</div>
                <div className="dropdown-item">All Years</div>
              </div>
            )}
          </div>

          {/* Organization Filter */}
          <div className="filter-dropdown">
            <button 
              className="filter-button"
              onClick={toggleOrgDropdown}
            >
              <Building size={16} />
              <span>{orgFilter}</span>
              <svg 
                className={`dropdown-arrow ${isOrgDropdownOpen ? 'rotated' : ''}`}
                width="12" 
                height="12" 
                viewBox="0 0 12 12"
              >
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </button>
            {isOrgDropdownOpen && (
              <div className="dropdown-menu">
                {organizationUnits.map((unit) => (
                  <div key={unit} className="dropdown-item">{unit}</div>
                ))}
                <div className="dropdown-item">All Units</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Chart Container */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
            barCategoryGap="30%"
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
              tickFormatter={formatYAxisTick}
              domain={[0, yAxisMax]}
            />
            {organizationUnits.map((unit) => (
              <Bar 
                key={unit}
                dataKey={unit} 
                fill={colors[unit]} 
                radius={[2, 2, 0, 0]}
                maxBarSize={60}
              />
            ))}
            <Legend 
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              wrapperStyle={{
                paddingTop: '20px',
                fontSize: '12px'
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsageCard;