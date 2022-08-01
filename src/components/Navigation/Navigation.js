import { Link, List } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
      </List>
    </nav>
  );
};
