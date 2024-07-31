import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Quotes from '../Pages/Quotes';
import Signup from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import UserQuotes from '../Pages/UserQuotes';


function RoutesComponent() {
  return (
    
      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path="/Quotes" element={<Quotes />} />
        <Route path="/UserQuotes" element={<UserQuotes />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    
  );
}

export default RoutesComponent;
