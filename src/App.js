
import './App.css';
import  { useState } from 'react';
import axios from 'axios';

import QuoteCard from './components/QuoteCard';

function App() {
  const [quotes, setQuotes] = useState();
  const getQuote = () => {
    axios
      .get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(res => {
            setQuotes(res.data[0]);
      })
  }
  return (
    <>
      <button onClick={getQuote}>Get Quotes</button>
      <QuoteCard {...quotes} />
    </>
  );
}

export default App;
