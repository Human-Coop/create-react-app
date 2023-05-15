import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css';

function EventForm({ event }) {
  return (
    <iframe src={event.rsvpForm} width="90%" height="743" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  )
}

export default EventForm;
