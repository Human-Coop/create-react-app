import React from 'react';
import { useEffect, useState } from 'react';
import EventDetails from './subpage/EventDetails';
import './App.css';

let events = [
  {
    name: "Crawfish Boil",
    id: "crawfishBoil",
    picture:"/path",
    time: "6:00pm May 3rd 2024",
    maplink: "href",
    location: "State Park Cabins",
    description: "A Crawfish boil 'rehearsal dinner'",
    state: false,
    rsvp: "href"
  },
  {
    name: "Wedding Ceremony",
    id: "ceremony",
    picture:"/path",
    time: "5:00pm May 4th 2024",
    maplink: "href",
    location: "Beach",
    description: "A Beach Wedding Ceremony",
    state: false,
    rsvp: "href"
  },
  {
    name: "Reception",
    id: "reception",
    picture:"/path",
    time: "7:00pm May 4th 2024",
    maplink: "href",
    location: "Activities Center",
    description: "A reception with food, drinks, & dancing",
    state: false,
    rsvp: "href"
  },
  {
    name: "Lantern Parade",
    id: "lanternParade",
    picture:"/path",
    time: "11:00pm May 4th 2024",
    maplink: "href",
    location: "State Park Cabins",
    description: "An parade from the activities center to the State Park Cabins for the after party bonfire",
    state: false,
    rsvp: "href"
  },
  {
    name: "Bagel Brunch",
    id: "bagelBrunch",
    picture:"/path",
    time: "10:00am May 5th 2024",
    maplink: "href",
    location: "State Park Cabins",
    description: "A bagel brunch",
    state: false,
    rsvp: "href"
  }
];

export function getEventState(eventId) {
  return events.find(({ id }) => id === eventId).state;
}

export function setEventState(eventId) {
  events.find(({ id }) => id === eventId).state = !events.find(({ id }) => id === eventId).state;
  return events;
}

export function getEvent(eventId) {
  return events.find(({ id }) => id === eventId);
}

export function getEvents() {
  return events;
}

function App() {
  // const [ minutes, setMin] = useState(null);
  const [ countdown, setCountdown] = useState(null);
  const [toggle, setToggle] = useState(false)

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
        {getEvents().map((event,index)=>{
            return <li key={index}>{event.name} <a onClick={() => setEventState(event.id)} >Details</a> | <a href={event.rsvp}>RSVP</a>
                { getEventState(event.id) && <EventDetails event={event} />}
              </li>})}
      </ul>
      <br />
      <h3>
        Sleeping Accomodation Suggestions
      </h3>
      <ul>
        <li>State Park Cabins <a>Book</a></li>
        <li>State Park Hotel <a>Book</a></li>
        <li>Stake Park Primitive camping <a>Book</a></li>
        <li>Stake Park RV camping <a>Book</a></li>
        <li>Nearby airbnbs <a>Book</a></li>
      </ul>
      <br />
      <h2>Countdown:</h2>
      <h3>{countdown ? countdown : 'Loading date...'}</h3>
    </main>
  );
}

export default App;
