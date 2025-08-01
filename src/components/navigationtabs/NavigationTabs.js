import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import './NavigationTabs.css'

const NavigationTabs = ({ 
  tabs = [],
  defaultActiveTab = null,
  onTabChange = () => {},
  showFilter = true,
  filterButtonText = "Global Filter",
  filterButtonIcon = Filter,
  onFilterClick = () => {},
  filterButtonVariant = "dark" // "dark", "light", "green"
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id || '');

  // Update active tab if defaultActiveTab prop changes
  useEffect(() => {
    if (defaultActiveTab) {
      setActiveTab(defaultActiveTab);
    }
  }, [defaultActiveTab]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  const FilterIcon = filterButtonIcon;

  const getFilterButtonClass = () => {
    const baseClass = "global-filter-btn";
    switch (filterButtonVariant) {
      case "light":
        return `${baseClass} filter-light`;
      case "green":
        return `${baseClass} filter-green`;
      default:
        return `${baseClass} filter-dark`;
    }
  };

  return (
    <div className="navigation-container">
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            disabled={tab.disabled}
            title={tab.tooltip}
          >
            {tab.icon && <tab.icon size={16} className="tab-icon" />}
            {tab.label}
            {tab.badge && <span className="tab-badge">{tab.badge}</span>}
          </button>
        ))}
      </div>

      {showFilter && (
        <div className="filter-container">
          <button 
            className={getFilterButtonClass()}
            onClick={onFilterClick}
            title="Apply filters"
          >
            <FilterIcon size={16} />
            {filterButtonText}
          </button>
        </div>
      )}
    </div>
  );
};


export default NavigationTabs;