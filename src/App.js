import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ countdown, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
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
      <p>{countdown ? countdown : 'Loading date...'}</p>
    </main>
  );
}

export default App;
