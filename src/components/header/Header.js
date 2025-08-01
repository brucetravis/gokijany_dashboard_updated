import React, { useState } from 'react';
import { Search, Bell, User, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="header-container">
      {/*  Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-text">
          <div className="welcome-label">Welcome</div>
          <div className="user-name">Jane Anderson!</div>
        </div>
      </div>

      {/* Search and Icons Section */}
      <div className="search-icons-section">
        {/* Search Bar */}
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Icons Section */}
        <div className="icons-section">
          {/* Notification Bell */}
          <div className="icon-wrapper" title="Notifications">
            <Bell className="header-icon" size={20} />
          </div>

          {/* User Profile */}
          <div className="user-profile" title="User Profile">
            <div className="user-avatar">
              <User size={16} />
            </div>
            <ChevronDown className="dropdown-icon" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;