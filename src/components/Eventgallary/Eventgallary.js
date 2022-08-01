import { Link } from 'react-router-dom';

export const EventGallary = ({ events }) => {
  return (
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <Link to={event.id}> {event.name}</Link>
        </li>
      ))}
    </ul>
  );
};
