import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Calendar, Filter, ChevronDown } from 'lucide-react';
import './TasksCard.css'

const TasksCard = ({ 
  title, 
  data,
  dateFilter,
  taskFilter,
  showFilters = true,
  customColors = {}
}) => {
  const [selectedDate, setSelectedDate] = useState(dateFilter);
  const [selectedTask, setSelectedTask] = useState(taskFilter);

  // Default task data if none provided
  const defaultData = [
    { name: 'Current tasks', value: 18, color: '#6B7280', count: 18 },
    { name: 'Upcoming tasks', value: 6, color: '#9CA3AF', count: 6 },
    { name: 'Expired tasks', value: 6, color: '#D1D5DB', count: 6 },
    { name: 'Waiting approval', value: 3, color: '#34D399', count: 3 },
    { name: 'Completed', value: 4, color: '#00a654', count: 4 }
  ];

  const chartData = data.length > 0 ? data : defaultData;

  // Apply custom colors if provided
  const processedData = chartData.map(item => ({
    ...item,
    color: customColors[item.name] || item.color
  }));

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="tooltip">
          <p className="tooltip-label">{data.name}</p>
          <p className="tooltip-value">Count: {data.count}</p>
        </div>
      );
    }
    return null;
  };

  // Custom legend component
  const CustomLegend = ({ payload }) => {
    return (
      <div className="legend-container">
        {payload.map((entry, index) => (
          <div key={index} className="legend-item">
            <div 
              className="legend-color" 
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="legend-text">
              {entry.value} ({entry.payload.count})
            </span>
          </div>
        ))}
      </div>
    );
  };

  // Calculate total tasks
  const totalTasks = processedData.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="tasks-card">
      {/* Header */}
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        
        {showFilters && (
          <div className="filters">
            <div className="filter-dropdown">
              <Calendar size={16} />
              <span>{selectedDate}</span>
              <ChevronDown size={16} />
            </div>
            <div className="filter-dropdown">
              <Filter size={16} />
              <span>{selectedTask}</span>
              <ChevronDown size={16} />
            </div>
          </div>
        )}
      </div>

      {/* Chart Container */}
      <div className="chart-container">
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart className='recharts-responsive'>
              <Pie
                data={processedData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                
              >
                {processedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          
          {/* Center Total */}
          <div className="chart-center">
            <div className="total-number">{totalTasks}</div>
            <div className="total-label">Total Tasks</div>
          </div>
        </div>

        {/* Legend */}
        <div className="legend-wrapper">
          <CustomLegend payload={processedData.map(item => ({
            value: item.name,
            color: item.color,
            payload: item
          }))} />
        </div>
      </div>
    </div>
  );
};


export default TasksCard;