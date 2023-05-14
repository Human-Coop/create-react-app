import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css';

function EventDetails({ event }) {
  return (
    <div class="eventDetails">
        <img width="300" height="200" src={event.picture} />
        <br></br>
        <h4>Time&nbsp;:&nbsp;</h4><p>{event.time}</p>
        <br></br>
        <h4>Location&nbsp;:&nbsp;</h4> <a href={event.maplink}>{event.location}</a>
        <div class="eventDescription">{event.description}</div>
    </div>
  )
}

export default EventDetails;
