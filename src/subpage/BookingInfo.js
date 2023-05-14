import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css';

function BookingInfo({ place }) {
  return (
    <div class="eventDetails">
        <img width="300" height="200" src={place.picture} />
        <div class="eventDescription">{place.description}</div>
    </div>
  )
}

export default BookingInfo;
