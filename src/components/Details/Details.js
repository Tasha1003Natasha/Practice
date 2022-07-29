// import { useState } from 'react';

export const Details = ({ details }) => {
  return (
    <div>
      <p>{details.name}</p>
      <img alt="Details" src={details.images[0].url} width="300" height="300" />
      <p>{details.classifications[0].genre.name}</p>
    </div>
  );
};
