import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { Calendar, Building2, ChevronDown } from 'lucide-react';
import './UsageChartCard.css'

const UsageChartCard = ({ 
  title,
  data,
  dataKeys,
  colors,
  showDateFilter = true,
  showOrgFilter = true,
  yAxisMax = 80000,
}) => {
  const [selectedDate, setSelectedDate] = useState('2022');
  const [selectedOrg, setSelectedOrg] = useState('All Units');

  // Custom tick formatter for Y-axis
  const formatYAxisTick = (value) => {
    if (value >= 1000) {
      return `${(value / 1000)}k`;
    }
    return value;
  };

  // Custom legend formatter
  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="custom-legend">
        {payload.map((entry, index) => (
          <div key={index} className="legend-item">
            <div 
              className="legend-color" 
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="legend-text">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="usage-chart-card">
      {/* Card Header */}
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className="card-filters">
          {showDateFilter && (
            <div className="filter-dropdown">
              <Calendar size={16} className="filter-icon" />
              <span className="filter-text">Date</span>
              <ChevronDown size={16} className="dropdown-icon" />
            </div>
          )}
          {showOrgFilter && (
            <div className="filter-dropdown">
              <Building2 size={16} className="filter-icon" />
              <span className="filter-text">Organization Unit</span>
              <ChevronDown size={16} className="dropdown-icon" />
            </div>
          )}
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
              bottom: 5,
            }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
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
            <Legend 
              content={renderLegend}
              wrapperStyle={{ paddingTop: '20px' }}
            />
            {dataKeys.map((key, index) => (
              <Bar 
                key={key}
                dataKey={key} 
                fill={colors[index] || '#00a654'}
                radius={[2, 2, 0, 0]}
                maxBarSize={60}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};


export default UsageChartCard;