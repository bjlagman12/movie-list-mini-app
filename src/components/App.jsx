const _ = require('lodash');

import React from 'react';
import MovieList from './MovieList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: this.props.movies,
      searchFor: '',
    };
    this.search = this.search.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  search(e) {
    this.setState({ searchFor: e.target.value });
  }

  submitSearch(e) {
    e.preventDefault();
    console.log('yay');
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

  render() {
    return (
      <div>
        <form onSubmit={this.submitSearch}>
          <input type="text" placeholder="searching for......" onChange={this.search} />
          <input type="submit" value="submit" />
        </form>
        <MovieList movies={this.state.allMovies} />
      </div>
    );
  }
}

export default App;
