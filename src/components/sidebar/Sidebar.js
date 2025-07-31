import React, { useState } from 'react';
import './Sidebar.css';
import {
  BatteryCharging,
  FileBarChart,
  Layers,
  LayoutDashboard,
  LogOut,
  Users,
} from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {

  // state to control expanding of the sidebar
  const [ isExpanded, setisExpanded ] = useState(false) // Initial state is false

  // function to navigate to other pages
  const navigate = useNavigate()

  return (
    <motion.div
      // onMouseEnter={() => setisExpanded(true)}
      // onMouseLeave={() => setisExpanded(false)}
      // initial={{ height: 80 }}
      initial={{ height: 0, opacity: 0 }}
      // initial={{ width: 80 }}
      animate={{ height: 350, opacity: 1 }}
      // animate={{ width: isExpanded ? 250: 80 }}
      transition={{ duration: 0.4, delay: 1 }}
      className="sidebar_container"
    >
      <div  >
        <LayoutDashboard 
          size={25}
          data-tooltip-id="dashboard-tooltip"
          className="icon icon-dashboard"
          onClick={() => navigate('/')}
        />
      </div>

      <div  >
        <Layers 
          size={25} 
          data-tooltip-id="categories-tooltip"
          className="icon icon-categories" 
        />
      </div>

      <div  >
        <Users 
          size={25}
          data-tooltip-id="tracking-tooltip"
          className="icon icon-tracking"
          onClick={() => navigate('/employee_tracking')}
        />
      </div>

      <div >
        <BatteryCharging 
          size={25} 
          data-tooltip-id="power-tooltip" 
          className="icon icon-power" 
        />
      </div>

      <div  >
        <FileBarChart 
          size={25}
          data-tooltip-id="report-tooltip"
          className="icon icon-report" 
        />
      </div>

      <div  >
        <LogOut 
          size={25} 
          data-tooltip-id="logout-tooltip"
          className="icon icon-logout" 
        />
      </div>

      <Tooltip id="dashboard-tooltip" effect="solid" place="right" className="custom-tooltip tooltip-dashboard ">Dashboard</Tooltip>
      <Tooltip id="categories-tooltip" effect="solid" place="right" className="custom-tooltip tooltip-categories ">Categories</Tooltip>
      <Tooltip id="tracking-tooltip" effect="solid" place="right" className="custom-tooltip tooltip-tracking ">Employee tracking</Tooltip>
      <Tooltip id="power-tooltip" effect="solid" place="right" className="custom-tooltip  tooltip-power">Power Consumption</Tooltip>
      <Tooltip id="report-tooltip" effect="solid" place="right" className="custom-tooltip  tooltip-report">Emission Report</Tooltip>
      <Tooltip id="logout-tooltip" effect="solid" place="right" className="custom-tooltip  tooltip-logout">Log Out</Tooltip>
    </motion.div>
  );
}
