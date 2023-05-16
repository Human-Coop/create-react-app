import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css';

function BookingInfo({ place }) {
  return (
    <div class="eventDetails">
        <img width="300" height="200" src={place.picture} />
        <br></br>
        <h4>Sleeps&nbsp;:&nbsp;</h4><p>{place.sleeps}</p>
        <br></br>
        <h4>Cost&nbsp;:&nbsp;</h4><p>{place.costs}</p>
        <br></br>
        <div class="eventDescription">{place.description}</div>
    </div>
  )
}

export default BookingInfo;
