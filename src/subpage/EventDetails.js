import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css';

function EventDetails({ event }) {
  return (
    <div class="eventDetails">
        <img width="300" src={event.picture} />
        <p>{event.time}</p>
        <p><a href={event.maplink}> {event.location}</a></p>
        <p>{event.description}</p>
    </div>
  )
}

export default EventDetails;
