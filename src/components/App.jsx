import { useState, useEffect } from 'react';
import { fetchEvents } from '../service/service';
import { EventGallary } from '../components/Eventgallary/Eventgallary';
import { eventsById } from '../service/service';
import { Details } from '../components/Details/Details';
// import { Routes, Route } from 'react-router-dom';

export const App = () => {
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<Home />} />
  //       <Route path="/events" element={<Events />} />
  //     </Route>
  //   </Routes>;
  // };

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
