import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
import { getIdFromUrl } from '../utility/Util';

const PokemonList = props => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        setPokemons(response.data.results);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  
  let content = (<p>Loading...</p>);

  if (!isLoading) {
    pokemons.forEach(element => {
      element.id = getIdFromUrl(element.url);
    });

    content = (pokemons.map((pokemon) => (
      <Pokemon key={ pokemon.id } pokemon={ pokemon }/>
    )));
  }
  
  return content;
}

export default PokemonList;
