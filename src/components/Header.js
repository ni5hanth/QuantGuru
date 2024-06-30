import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, User } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Perform any logout logic here
    navigate('/login');
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.location.reload();
    }
  };

  return (
    <header className="header">
      <button
        className="header-logo"
        onClick={handleLogoClick}
      >
        <FontAwesomeIcon icon={faGraduationCap} className="icon-graduate" />
        Quant Guru
        <div className="header-logo-underline"></div>
      </button>
      <div className="header-controls">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search topics..."
            className="search-input"
          />
          {searchText && (
            <button
              className="cancel-button"
              onClick={() => setSearchText('')}
            >
              &#x2715;
            </button>
          )}
        </div>
        <div className="user-menu-container">
          <button
            className="user-icon"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          >
            <User />
          </button>
          {isUserMenuOpen && (
            <div className="user-menu">
              <button className="menu-item">My Profile</button>
              <button className="menu-item" onClick={() => navigate('/login')}>Login</button>
              <button className="menu-item" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;