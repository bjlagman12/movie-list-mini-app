import React from 'react';
import MovieList from './MovieList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: this.props.movies,
    };
  }
  render() {
    return (
      <div>
        <MovieList movies={this.state.allMovies}/>
      </div>
    );
  }
}

export default App;

