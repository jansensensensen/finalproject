// src/Login.js
import './login.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('Before fetch request');
    try {
      const response = await fetch('http://localhost:8080/User/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      console.log('After fetch request');
  
      if (response.ok) {
        console.log('Login successful');
        navigate('/dashboard');
      } else {
        console.error('Login failed', response.statusText);
      }
    } catch (error) {
      console.error('Error during login', error.message);
    }
  };
  
  const handleRegister = () => {
    navigate('/registration');
  };

  return (
    <div className="login-container">
    <img src="/wildcats.png" alt="" className="login-image" />
      <h2>Login</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Login;
