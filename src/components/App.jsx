const _ = require('lodash');

import React from 'react';
import MovieList from './MovieList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: this.props.movies,
      searchFor: '',
      addMovie: ''
    };

    this.submitSearch = this.submitSearch.bind(this);
    this.submitAdd = this.submitAdd.bind(this);
  }

  submitSearch(e) {
    e.preventDefault();
    console.log('submit button');
    const movies = this.state.allMovies;
    const search = this.state.searchFor.toLowerCase();
    const searchedMovie = [];
    if (search.length > 0) {
      movies.map((movie) => {
        if (_.includes(movie.title.toLowerCase(), search)) {
          searchedMovie.push(movie);
        }
      });
      if (searchedMovie.length > 0) {
        this.setState({ allMovies: searchedMovie });
      } else {
        this.setState({ allMovies: '' });
      }
    }
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

  render() {
    return (
      <div>
        <form onSubmit={this.submitAdd}>
          <input type="text" placeholder="Add movie" onChange={(e)=> this.setState({ addMovie: e.target.value })} />
          <input type="submit" value="submit"/>
        </form>
        <form onSubmit={this.submitSearch}>
          <input type="text" placeholder="Searching for......" onChange={(e)=> this.setState({ searchFor: e.target.value })} />
          <input type="submit" value="submit" />
        </form>
        <MovieList movies={this.state.allMovies} />
      </div>
    );
  }
}

export default App;
