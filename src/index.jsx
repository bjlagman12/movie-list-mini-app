import ReactDOM from 'react-dom';
import React from 'react';
import {movies} from './data/movies';
import App from './components/App';

const addMovies = [];


ReactDOM.render(<App movies={movies} addMovies={addMovies}/>, document.getElementById('app'));
