import Movie from './Movie';
import React from 'react';

const MovieList = ({ movies }) => (
  <div>
    { movies ? (movies.map((movie, key) => <Movie movie={movie} key={key}/>)): 'Movie does not exist' }
  </div>
);
export default MovieList;
