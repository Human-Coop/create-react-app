import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css';

function EventDetails({ event }) {
  return (
    <div class="eventDetails">
        <img width="300" src={event.picture} />
        <h4>Time:</h4><p> {event.time}</p>
        <h4>Location:</h4> <a href={event.maplink}> {event.location}</a>
        <div>{event.description}</div>
    </div>
  )
}

export default EventDetails;
