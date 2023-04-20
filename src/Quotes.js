import React, { useState, useEffect } from 'react';



const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        console.log(dataQuotes);
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }

   const handleClick = () => {
    getQuote();
   }

  return (
    <div id="quote-box">
      <div id="text"><h4>Quote: </h4><p> {quote}</p></div>
      <div id="author"><h4>Author: </h4><p> { author}</p></div>

      <div id="buttons">
        <button onClick={handleClick} id="new-quote">Click For New</button>
      </div>
    </div>
  )
}

export default Quotes;