import React, { Component } from 'react';

class PokemonList extends Component {
  render() {
    return this.props.pokemons.map((pokemon) => (
      <h3>{ pokemon.name }</h3>
    ));
  }
}

export default PokemonList;
