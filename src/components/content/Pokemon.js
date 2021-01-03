import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Util from '../utility/Util';

class Pokemon extends Component {
  render() {
    const { id, name } = this.props.pokemon;
    return (
      <div>
        <Link to={ '/pokemon/' + id }>{ Util.capitalize(name) }<br /></Link>
      </div>
    )
  }
}

export default Pokemon;
