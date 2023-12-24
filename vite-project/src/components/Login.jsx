import React, { useState } from 'react';
import '../styles/EmployeeDashboard.css';
import Group from '../assets/Group 3.png';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate static login (replace with your actual logic)
    const staticEmail = 'admin@example.com';
    const staticPassword = '123';

    if (email === staticEmail && password === staticPassword) {
      console.log('Static login successful');
      navigate("/home");
      // Add logic to redirect or perform actions after successful login
    } else {
      console.log('Invalid credentials');
      // Add logic to handle unsuccessful login (e.g., show an error message)
    }

    // Reset the form after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className='loginContainer'>
      <div className='GroupImage'>
        <img src={Group} alt="logo" />
        <p className='Ptext'>We are Electric</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='Email'>
          <input type="email" placeholder='Email' value={email} onChange={handleEmailChange} />
        </div>
        <div className='Password'>
          <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
        </div>
        <div className="login">
          <button type="submit" onClick={handleSubmit} > <span style={{opacity:0.4}}>
            Login
            </span>
            </button>
        </div>
      </form>
            <p style={{color:`#36A546`, opacity:1}}> Forgot password?</p>
     
    </div>
  );
};

export default Login;
