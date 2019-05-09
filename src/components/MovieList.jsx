import Movie from './Movie';
import React from 'react';

const MovieList = ({ movies, watch, toggleMovie}) => (
  <div className='allMovies'>
    { movies ? (movies.map((movie, key) => <Movie movie={movie} key={key} watch={watch} toggleMovie={toggleMovie}/>)): 'Movie does not exist' }
  </div>
);
export default MovieList;
