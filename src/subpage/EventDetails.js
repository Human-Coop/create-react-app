import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css';

function EventDetails({ event }) {
  return (
    <div>
      <h4>{event.name}</h4>

      <div>
        <img src={event.picture} />
        <p>{event.time}</p>
        <p><a href={event.maplink}> {event.location}</a></p>
        <p>{event.description}</p>
      </div>
    </div>
  )
}

export default EventDetails;
