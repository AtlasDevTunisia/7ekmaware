// frontend/src/components/ui/Header.js
import React from 'react';
import './App.css'; // optional, or use App.css if you prefer

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo-container">
        <a href="/">
          <img
            src="/7ekmaware-logo.png"
            alt="7EKMAWARE Logo"
            className="logo"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;

