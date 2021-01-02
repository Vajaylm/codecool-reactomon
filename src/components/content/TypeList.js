import React, { Component } from 'react';
import PokemonType from './PokemonType';

class TypeList extends Component {
  render() {
    return this.props.types.map((type) => (
      <PokemonType type={type}/>
    ));
	}
}

export default TypeList;
