import React, { Component } from 'react';
import Util from '../utility/Util';

class PokemonType extends Component {
  render() {
    const {name} = this.props.type;
    return (
      <div>
        <p>{ Util.capitalize(name) }</p>
      </div>
    )
  }
}

export default PokemonType;
