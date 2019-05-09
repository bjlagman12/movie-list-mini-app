import axios from 'axios';
import { API } from './config'
import { Module } from 'module';

let popular = () => {
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US`)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err)
    })
};

let nowPlaying = () => {
  axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API}&language=en-US`)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
}

let searchFor = (search) => {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${search}`)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
}

module.exports = {
  popular,
  nowPlaying,
  searchFor
}

