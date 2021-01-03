import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
import { getIdFromUrl } from '../utility/Util';

const PokemonList = props => {
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => setPokemons(response.data.results));
  }, []);
  
  pokemons.forEach(element => {
    element.id = getIdFromUrl(element.url);
  });
  
  return pokemons.map((pokemon) => (
    <Pokemon key={ pokemon.id } pokemon={ pokemon }/>
  ));
}

export default PokemonList;
