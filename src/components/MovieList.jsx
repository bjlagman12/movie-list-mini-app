import Movie from './Movie';
import React from 'react';

let MovieList = ({movies}) => (
  <div>
    {movies.map((movie, key) => <Movie movie={movie} key={key}/>)}
  </div>
);
export default MovieList;
