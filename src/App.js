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
      <h3>
        Wedding Events
      </h3>
      <ul>
        <li>Crawfish Boil 5/3/2024 6:00pm <a>Details</a> | <a>RSVP</a></li>
        <li>Wedding Ceremony 5/4/2024 6:00pm <a>Details</a> | <a>RSVP</a></li>
        <li>Reception 5/4/2024 7:00pm <a>Details</a> | <a>RSVP</a></li>
        <li>Lantern Parade to Afterpary 5/4/2024 9:00pm <a>Details</a></li>
        <li>Bagel Brunch 5/5/2024 10:00am <a>Details</a> | <a>RSVP</a></li>
      </ul>
      <br />
      <h3>
        Sleeping Accomodation Suggestions
      </h3>
      <ul>
        <li>State Park Cabins <a>Book</a></li>
        <li>State Park Hotel <a>Book</a></li>
        <li>Stake Park camping <a>Book</a></li>
      </ul>
      <br />
      <h2>Countdown:</h2>
      <h3>{countdown ? countdown : 'Loading date...'}</h3>
    </main>
  );
}

export default App;
