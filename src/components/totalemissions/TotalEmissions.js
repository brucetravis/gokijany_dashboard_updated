import React, { useState } from 'react';
import { ChevronDown, Zap, TrendingDown, TrendingUp } from 'lucide-react';
import './TotalEmissions.css'

const TotalEmissions = ({ 
  title,
  value,
  changePercentage,
  changeDirection, 
  changeText,
  icon: CustomIcon = Zap,
  dateRange,
  showDateFilter = true,
}) => {
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState(dateRange);

  const dateOptions = [
    "2022",
    "2021", 
    "2020",
    "2019",
    "Last 12 months",
    "Last 6 months",
    "Custom range"
  ];

  const handleDateSelect = (option) => {
    setSelectedDateRange(option);
    setIsDateDropdownOpen(false);
  };

  const TrendIcon = changeDirection === "down" ? TrendingDown : TrendingUp;


  return (
    <div className="emissions-card">
      {/* Header with title and date filter */}
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        {showDateFilter && (
          <div className="date-filter">
            <button 
              className="date-button"
              onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
            >
              <span>{selectedDateRange}</span>
              <ChevronDown 
                size={16} 
                className={`chevron ${isDateDropdownOpen ? 'rotated' : ''}`}
              />
            </button>
            
            {isDateDropdownOpen && (
              <div className="dropdown-menu">
                {dateOptions.map((option) => (
                  <button
                    key={option}
                    className="dropdown-item"
                    onClick={() => handleDateSelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Main content area */}
      <div className="card-content">
        <div className="value-section">
          <div className="icon-container">
            <CustomIcon size={24} color="white" />
          </div>
          <div className="value-display">
            <span className="main-value">{value}</span>
          </div>
        </div>

        {/* Change indicator */}
        <div className="change-indicator">
          <div className="change-badge">
            <TrendIcon size={14} />
            <span className="change-percentage">
              {changePercentage}% {changeText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};



export default TotalEmissions;