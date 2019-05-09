import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watch: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.state.watch ? this.setState({watch: false}): this.setState({watch: true})
  }
  render() {
    return (
      <div className='movie'>
        <span className='picture'>
          <img src ={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}/>
        </span>
        <span className='info'>
          <div className='title'>{this.props.movie.title}</div>
          <div className='description'>{this.props.movie.overview}</div>
          <div className= 'releaseDate'>Release Date</div>
          <div className= 'releaseDate'>{this.props.movie.release_date}</div>
          <button onClick={() => {this.props.toggleMovie(this.props.movie); this.toggle()}} >{this.state.watch ? 'watched': 'watch'}</button>
        </span>
     </div>
    );
  }
}

export default Movie;

