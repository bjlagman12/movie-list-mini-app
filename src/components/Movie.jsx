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
      <div>
        {this.props.movie.title}
        <button onClick={() => {this.props.toggleMovie(this.props.movie); this.toggle()}} >{this.state.watch ? 'watch': 'watched'}</button>
      </div>
    );
  }
}

export default Movie;
