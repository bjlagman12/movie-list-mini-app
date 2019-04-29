import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  render() {
    return (
      <div>
        {this.props.movie.title }
      </div>
    );
  }
}

export default Movie;
