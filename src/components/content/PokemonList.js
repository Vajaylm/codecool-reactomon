import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Util from '../utility/Util';

class PokemonList extends Component {
  render() {
    this.props.pokemons.forEach(element => {
      element.id = Util.getIdFromUrl(element.url);
    });
    
    return this.props.pokemons.map((pokemon) => (
      <Pokemon key={pokemon.id} pokemon={pokemon}/>
    ));
  }
}

export default PokemonList;
