import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css';

function EventDetails({ event }) {
  return (
    <div>
      <h1>{event.name}</h1>

      <div>
        <img src={event.picture} />
        <h3>{event.time}</h3>
        <p><a href={event.maplink}> {event.location}</a></p>
        <p>{event.description}</p>
      </div>
    </div>
  )
}

export default EventDetails;
