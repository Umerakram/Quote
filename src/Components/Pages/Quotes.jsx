import React, { useEffect, useState } from 'react';
import { fetchData,getStoredData } from '../Services/fetch';
import '../CSS/Quotes.css';

const Quotes = () => {
  const [data, setData] = useState([]);
  const [randomQuote, setRandomQuote] = useState('');
  const [authorQuote, setAuthorQuote] = useState('');

  useEffect(() => {
    const storedData = getStoredData();
    if (storedData.length > 0) {
      setData(storedData);
    } else {
      fetchData().then((responseData) => setData(responseData));
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setRandomQuote(data[0].text);
      setAuthorQuote(data[0].author);
    }
  }, [data]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomQuote(data[randomIndex].text);
    setAuthorQuote(data[randomIndex].author);
  };

  return (
    <div className="Quotes">
      <h1>Random Quotes</h1>
      <div className="container">
        <div className="card">
          <h3>"{randomQuote}"</h3>
          <p>{authorQuote}</p>
        </div>
      </div>
      <button onClick={generateRandomQuote}>Show New Quote</button>
    </div>
  );
};

export default Quotes;
