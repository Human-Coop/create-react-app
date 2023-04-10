import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
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
      <h1>May 4th 2024</h1>
      <h2>
        A website with info about our wedding
      </h2>
      <p>
        List of pages and links coming soon
      </p>
      <br />
      <h2>Current Time:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
