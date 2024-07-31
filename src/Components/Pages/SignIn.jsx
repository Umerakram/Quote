import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/SignIn.css'


const SignIn = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUserData = JSON.parse(localStorage.getItem('userData')) || [];
    const user = existingUserData.find((user) => user.email === email);

    if (user) {
      if (user.password === password) {
        setError('');
        setEmail('');
        setPassword('');
        handleLogin(user); 
      } 
      else {
        setError('Incorrect password. Please try again.');
      }
    } 
    else {
      setError('Email not found. Please sign up first.');
    }
  };

  
  return (
    <form className="form-container" onSubmit={handleSubmit}>
    <h2>SignIn Form</h2>
      <label className="label">
        Email:
        <input className="input" type="email" value={email} onChange={handleEmailChange} required />
      </label>
      <br />
      <label className="label">
        Password:
        <input className="input" type="password" value={password} onChange={handlePasswordChange} required />
      </label>
      <br />
      <button className="submit-button" type="submit">Sign In</button>
      {error && <p className="error-message">{error}</p>} 
      <p>Not a memeber?{<Link to="/Signup" className="nav-item">Signup</Link>}</p> 
    </form>
    
  );
};

export default SignIn;