import axios from 'axios';

axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

const API_KEY = '4KV9Chpg2H2cGNoEZkUT6nJwkLvlEuMx';

export const fetchEvents = async () => {
  const response = await axios.get(`events?size=20&apikey=${API_KEY}`);
  return response.data._embedded.events;
};

export const eventsById = async id => {
  const responseById = await axios.get(`events/${id}?apikey=${API_KEY}`);
  return responseById.data;
};
