import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ChevronDown, Calendar } from 'lucide-react';
import './ClimateEfficiencyCard.css'

const ClimateEfficiencyCard = ({ 
  title,
  data,
  dateRange,
  showDateFilter = true,
  cardClassName = "",
  chartHeight
}) => {
  return (
    <div className={`climate-card ${cardClassName}`}>
      {/* Header */}
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        {showDateFilter && (
          <div className="date-filter">
            <Calendar className="calendar-icon" size={16} />
            <span className="date-text">{dateRange}</span>
            <ChevronDown className="chevron-icon" size={16} />
          </div>
        )}
      </div>
      {/* Chart Container */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={chartHeight}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: 10,
              bottom: 20,
            }}
            barCategoryGap="10%" // Gap between categories
            barSize={40} // Fixed bar width
          >
            <XAxis 
              dataKey="year" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#ffffff' }}
            />
            <YAxis 
              domain={[0, 1]}
              ticks={[0, 0.2, 0.4, 0.6, 0.8, 1.0]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#ffffff' }}
              tickFormatter={(value) => value.toFixed(1)}
            />
            <Bar 
              dataKey="value" 
              radius={[4, 4, 0, 0]}
              fill={(entry) => entry.color}
            >
              {data.map((entry, index) => (
                <Bar key={`bar-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ClimateEfficiencyCard;