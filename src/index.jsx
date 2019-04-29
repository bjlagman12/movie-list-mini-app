/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom';
import React from 'react';
import {movies} from './data/movies';
import App from './components/App';


ReactDOM.render(<App movies={movies} />, document.getElementById('app'));
