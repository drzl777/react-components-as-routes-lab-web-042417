import React from 'react';


const Actor = ({actor}) => {
  return (
    <div className="actor">
      <h2>{actor.name}</h2>
      <h3>Movies:</h3>
      <ul>
        {actor.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  );
};

export default Actor;
