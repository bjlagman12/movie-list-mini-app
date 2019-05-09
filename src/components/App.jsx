const _ = require('lodash');
const axios = require('axios');

import { API } from '../data/config';
import React from 'react';
import MovieList from './MovieList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      totalMovies: [],
      searchFor: '',
      addMovie: '',
      watched: {},
      unWatched: [],
      page: 1
    };
    this.submitSearch = this.submitSearch.bind(this);
    this.submitAdd = this.submitAdd.bind(this);
    this.toggleMovie = this.toggleMovie.bind(this);
    this.unWatchedToggle = this.unWatchedToggle.bind(this);
    this.watchedToggle = this.watchedToggle.bind(this);
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.home = this.home.bind(this);
  }

  componentDidMount() {
    this.fetchPopular();
  }

  submitSearch(e) {
    e.preventDefault();
    console.log('submit button');
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${this.state.searchFor}`)
    .then((data) => {
      this.setState({allMovies: data.data.results})
    })
    .catch((err) => {
      console.log(err);
    })

    // const movies = this.state.allMovies;
    // const search = this.state.searchFor.toLowerCase();
    // const searchedMovie = [];
    // if (search.length > 0) {
    //   movies.map((movie) => {
    //     if (_.includes(movie.title.toLowerCase(), search)) {
    //       searchedMovie.push(movie);
    //     }
    //   });
    //   if (searchedMovie.length > 0) {
    //     this.setState({ allMovies: searchedMovie });
    //   } else {
    //     this.setState({ allMovies: '' });
    //   }
    // }
  }

  submitAdd(e) {
    e.preventDefault();
    let add = this.props.addMovies;
    if (this.state.addMovie.length > 0 && add.length === 0) {
      add.push({ title: this.state.addMovie });
      this.setState({ allMovies: add });
    } else {
      let movies = this.state.allMovies.concat({ title: this.state.addMovie});
      this.setState({allMovies: movies });
    };
    console.log('add movie');
  }

  toggleMovie(m) {
    var current = this.state.watched;
    if (current[m.title]) {
      delete current[m.title];
    } else {
      current[m.title] = 1;
    }
    console.log(current);
  }

  watchedToggle () {
    let watchedList = this.state.watched;
    let watched = [];
    for (var movie in watchedList) {
      watched.push({title: movie});
    }
    this.setState({allMovies: watched});
  }

  unWatchedToggle(){
    let all = this.state.totalMovies;
    let watchedList = Object.keys(this.state.watched);
    let unWatched =[];
    for (var i = 0; i < all.length; i++) {
      for (var j = 0; j < watchedList.length; j++) {
        if (all[i].title !== watchedList[j]) {
          unWatched.push({title: all[i]});
        }
      }
    }
    console.log(unWatched);
    this.setState({allMovies: all});
  }

  fetchPopular() {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=${this.state.page}`)
      .then((data) => {
        console.log(data);
        this.setState({allMovies: data.data.results});
        this.setState({totalMovies: data.data.results});
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  back() {
    if (this.state.page > 1) {
      this.state.page --;
      this.setState({page: this.state.page});
      this.fetchPopular();
    }
  }

  next() {
    this.state.page ++;
    this.setState({page: this.state.page});
    this.fetchPopular();
  }

  home() {
    this.setState({allMovies: this.state.totalMovies})
  }



  render() {
    return (
      <div>
        <div className="navbar">
          <div className='header'>
        CINETUBE
          </div>
          <div>
            <button onClick={this.unWatchedToggle}>Watch</button>
            <button onClick={this.watchedToggle}>Watched</button>
          </div>
          <form onSubmit={this.submitAdd}>
            <input type="text" placeholder="Add movie" onChange={(e)=> this.setState({ addMovie: e.target.value })} />
            <input type="submit" value="submit"/>
          </form>
          <form onSubmit={this.submitSearch}>
            <input type="text" placeholder="Searching for......" onChange={(e)=> this.setState({ searchFor: e.target.value })} />
            <input type="submit" value="submit" />
          </form>
        </div>
        
        <div className="page">
          <div className="pagebt">
            {this.state.page > 1 ? <button onClick={this.back}>Back</button> : ''}
            <button onClick={this.home}>Home</button>
            <button onClick={this.next}>Next</button>
          </div>
        </div>
        <MovieList movies={this.state.allMovies} watch={this.state.watch} toggleMovie={this.toggleMovie}/>
      </div>
    );
  }
}

export default App;
