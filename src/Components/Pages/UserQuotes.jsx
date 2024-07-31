import React, { useState, useEffect } from 'react';
import SignIn from './SignIn';
import '../CSS/UserQuotes.css';

const UserNewQuotes = () => {
  const [quote, setQuote] = useState('');
  const [userQuotes, setUserQuotes] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      const quotes = JSON.parse(localStorage.getItem('quotes')) || [];
      setUserQuotes(quotes.filter((quote) => quote.userId === loggedInUser.email));
    }
  }, [loggedInUser]);

  const handleLogin = (user) => {
    setLoggedInUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('user');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (quote.trim() !== '') {
      const quotes = JSON.parse(localStorage.getItem('quotes')) || [];
      const quoteData = {
        text: quote,
        userId: loggedInUser.email,
      };
      quotes.push(quoteData);
      localStorage.setItem('quotes', JSON.stringify(quotes));
      setUserQuotes([...userQuotes, quoteData]);
      setQuote('');
      setSearchQuery('');
    }
  };

  const filteredQuotes = userQuotes.filter((quoteData) =>
    quoteData.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  return (
    <div>
      {loggedInUser ? (
        <div className="UserNewQuotes">
          <h2>Welcome, {loggedInUser.name}!</h2>
          
          <h2>Enter a New Quote</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              value={quote}
              onChange={(event) => setQuote(event.target.value)}
              placeholder="Enter your quote here"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          <h2>Your Quotes</h2>
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search quotes"
          />
          {filteredQuotes.length > 0 ? (
            <ul>
              {filteredQuotes.map((quoteData, index) => (
                <li key={index}>{quoteData.text}</li>
              ))}
            </ul>
          ) : (
            <p>No quotes to display</p>
          )}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <SignIn handleLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default UserNewQuotes;
