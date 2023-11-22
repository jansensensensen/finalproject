// src/Registration.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [idno, setidno] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [course, setcourse] = useState('');
  const [year, setyear] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:8080/User/register', {
        idno,
        username,
        password,
        fname,
        lname,
        email,
        course,
        year,
      });
  
      console.log('Registration successful', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error.message);
  
      // Check if the error response contains a specific message
      if (error.response && error.response.status === 400) {
        // Display the error message to the user
        alert(error.response.data);
      } else {
        // Handle other registration failures
        // Display a generic error message or perform other actions as needed
        console.error('An unexpected error occurred during registration');
      }
    }
  };
    

  return (
    <div>
      <h2>Registration</h2>
      <label htmlFor="idno">ID Number:</label>
      <input
        type="text"
        id="idno"
        value={idno}
        onChange={(e) => setidno(e.target.value)}
      />
      <br />
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
        type="text"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label htmlFor="fname">Firstname:</label>
      <input
        type="text"
        id="fname"
        value={fname}
        onChange={(e) => setfname(e.target.value)}
      />
      <br />
      <label htmlFor="lname">Lastname:</label>
      <input
        type="text"
        id="lname"
        value={lname}
        onChange={(e) => setlname(e.target.value)}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <br />
      <label htmlFor="course">Course:</label>
      <input
        type="text"
        id="course"
        value={course}
        onChange={(e) => setcourse(e.target.value)}
      />
      <br />
      <label htmlFor="year">Year:</label>
      <input
        type="text"
        id="year"
        value={year}
        onChange={(e) => setyear(e.target.value)}
      />
      <br />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Registration;
