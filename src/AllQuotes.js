import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Quote from './Quote';

function AllQuotes() {
    const [quotes, setQuotes] = useState([]);
    
    const fetchData = async () => {
        axios.get('https://type.fit/api/quotes')
        .then(res => {
            setQuotes(res.data);
        })
        .catch(err => console.log(err));
    }
    
    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div className="container">
            <div className="header">
                <h1>All Quotes</h1>
                <div className='quotes'>
                    {quotes.map((quote, index) => (
                        <Quote key={index} quote={quote} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllQuotes;
