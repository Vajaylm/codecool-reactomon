import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PokemonList extends Component {
  render() {
    return this.props.pokemons.map((pokemon) => (
      <Link to={'/pokemon/' + pokemon.id }>{ pokemon.name }<br /></Link>
    ));
  }
}

export default PokemonList;
