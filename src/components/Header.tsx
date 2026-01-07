import React from 'react'
import '../styles/Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Admin Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user-info">
          <div className="user-avatar">A</div>
          <span className="user-name">Admin User</span>
        </div>
      </div>
    </header>
  )
}

export default Header
