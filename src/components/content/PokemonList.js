import React from 'react';
import Pokemon from './Pokemon';
import { getIdFromUrl } from '../utility/Util';

const PokemonList = props => {
  props.pokemons.forEach(element => {
    element.id = getIdFromUrl(element.url);
  });
  
  return props.pokemons.map((pokemon) => (
    <Pokemon key={ pokemon.id } pokemon={ pokemon }/>
  ));
}

export default PokemonList;
