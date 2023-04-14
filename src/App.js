import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const [ minutes, setMin] = useState(null);
  const [ countdown, setCountdown] = useState(null);
  useEffect(() => {
    async function getCountdown() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setCountdown(newDate);
    }
    getCountdown();
  }, []);
  return (
    <main>
      <h1>Alex &#38; Regina</h1>
      <h2>
        A website with info about our wedding
      </h2>
      <p>
        List of pages and links coming soon
      </p>
      <br />
      <h2>Countdown:</h2>
      <h3>{countdown ? countdown : 'Loading date...'}</h3>
    </main>
  );
}

export default App;
