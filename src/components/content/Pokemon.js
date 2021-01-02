import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
  render() {
    const {id, name} = this.props.pokemon;
    return (
      <div>
        <Link to={'/pokemon/' + id }>{ name }<br /></Link>
      </div>
    )
  }
}

export default Pokemon;
