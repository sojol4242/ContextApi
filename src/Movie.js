import React from 'react';

const Movie = ( {movie }) => {
  
    return (
        <div>
       
      <h4>Movie Id : {movie.id}</h4>
      <h5>Movie Name : {movie.name}</h5>
      <h5>Movie Price : ${movie.price}</h5>
        </div>
    );
};

export default Movie;