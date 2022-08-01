import { eventsById } from 'service/service';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

export const useFetchEventById = () => {
  const [event, setEvent] = useState(null);
  const { eventsId } = useParams();

  useEffect(() => {
    eventsById(eventsId).then(setEvent);
  }, [eventsId]);
  console.log(event);
  return event;
};
