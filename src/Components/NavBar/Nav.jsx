import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Nav.css'

function Nav() {
  return (

    <div >
      <header>
        <h1>Magic Quote Generator</h1>
      </header>
      
      <nav>
        <Link to="/Quotes" className="nav-item">Quotes</Link>
        <Link to="/UserQuotes" className="nav-item">User Quotes</Link>
      </nav>
    </div>

  )
}
export default Nav