import './RandBox.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import { Refresh as RefreshIcon, Twitter as TwitterIcon, ListAlt } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Quote from './Quote';

function RandBox() {
  const [quote, setQuote] = useState({});

  const fetchData = async () => {
    axios.get('https://type.fit/api/quotes')
      .then(res => {
        const randomQuote = res.data[Math.floor(Math.random() * res.data.length)];

        if (randomQuote.author === null) {
          randomQuote.author = 'Unknown';
        }

        setQuote(randomQuote);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleButtonClick = () => {
    fetchData();
  }

  const handleTwitterClick = () => {
    const tweetText = `"${quote.text}" - ${quote.author}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl);
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Random Quote Generator</h1>
        
        <Quote quote={quote} />

        <div className='buttons'>
          <IconButton onClick={handleButtonClick}>
            <RefreshIcon />
          </IconButton>
          <IconButton style={{ color: '#1DA1F2' }} onClick={handleTwitterClick}>
            <TwitterIcon />
          </IconButton>
          <IconButton component={Link} to='/all-quotes' className='view-all-quotes'>
            <ListAlt />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default RandBox;
