// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import { useState, useEffect } from 'react';
import { fetchEvents } from '../service/service';
import { EventGallary } from '../components/Eventgallary/Eventgallary';
import { eventsById } from '../service/service';
import { Details } from '../components/Details/Details';

export const App = () => {
  const [eventsList, setEventsList] = useState([]);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (eventsList.length === 0) fetchEvents().then(setEventsList);
  }, [eventsList]);

  const handleFetchEvents = id => {
    eventsById(id).then(setEvent);
  };

  return (
    <>
      <EventGallary events={eventsList} fetchEvents={handleFetchEvents} />
      {event && <Details details={event} />}
    </>
  );
};
