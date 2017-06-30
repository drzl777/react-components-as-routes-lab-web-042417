import React from 'react';


const Director = ({director}) => {
  return (
    <div>
      <h2>Name: {director.name}</h2>
      <h3>Movies:</h3>
      <ul>
        {director.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  );
};

export default Director;
