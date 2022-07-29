import { useState } from 'react';

export const EventGallary = ({ events, fetchEvents }) => {
  return (
    <ul>
      {events.map(event => (
        <li key={event.id} 
        onClick={()=>fetchEvents(event.id)}>{event.name}</li>
      ))}
    </ul>
  );
};
