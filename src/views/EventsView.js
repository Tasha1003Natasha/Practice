import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { Details } from 'components/Details/Details';
import { EventGallary } from 'components/Eventgallary/Eventgallary';
import { fetchEvents } from 'service/service';

export const EventsView = () => {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    if (eventsList.length === 0) fetchEvents().then(setEventsList);
  }, [eventsList]);

  return (
    <>
      <EventGallary events={eventsList} />
      <Outlet />
    </>
  );
};

// const [eventsList, setEventsList] = useState([]);
// const [event, setEvent] = useState(null);
// useEffect(() => {
//   if (eventsList.length === 0) fetchEvents().then(setEventsList);
// }, [eventsList]);
// const handleFetchEvents = id => {
//   eventsById(id).then(setEvent);
// };
// return (
//   <>
//     <EventGallary events={eventsList} fetchEvents={handleFetchEvents} />
//     {event && <Details details={event} />}
//   </>
// );
