import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import '../CSS/SignIn.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUserData = JSON.parse(localStorage.getItem('userData')) || [];
    const isEmailUnique = existingUserData.every((user) => user.email !== email);
    if (!isEmailUnique) {
      setError('Email already exists. Please enter a new email.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    const newUser = {
      name,
      email,
      password,
    };

    const updatedUserData = [...existingUserData, newUser];
    localStorage.setItem('userData', JSON.stringify(updatedUserData));
    setName('');
    setEmail('');
    setPassword('');
    setError('');
    window.location.href = '/UserQuotes';
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>SignUp Form</h2>
      <label className="label">
        Name:
        <input className="input" type="text" value={name} onChange={handleNameChange} required />
      </label>
      <br />
      <label className="label">
        Email:
        <input className="input" type="email" value={email} onChange={handleEmailChange} required />
      </label>
      <br />
      <label className="label">
        Password:
        <input className="input" type="password" value={password} onChange={handlePasswordChange} required />
        {error && <span className="error-message">{error}</span>}
      </label>
      <br />
      <button className="submit-button" type="submit">Sign Up</button>
      <p>Already a member? {<Link to="/SignIn" className="nav-item">SignIn</Link>}</p>
    </form>
  );
};

export default Signup;
