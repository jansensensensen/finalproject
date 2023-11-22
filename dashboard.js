// src/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
  };

  const navStyle = {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const linkStyle = {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#333',
    fontSize: '18px',
  };

  return (
    <div style={containerStyle}>
      <h2>Welcome to the Dashboard</h2>
      <nav>
        <ul style={navStyle}>
          <li>
            <Link to="/dashboard/home" style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile" style={linkStyle}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/dashboard/services" style={linkStyle}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/dashboard/survey" style={linkStyle}>
              Take a Survey
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
