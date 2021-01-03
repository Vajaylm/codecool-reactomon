import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonType from './PokemonType';
import { getIdFromUrl } from '../utility/Util';

const TypeList = props => {
  const [types, setTypes] = useState([]);
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type')
      .then(response => setTypes(response.data.results));
  }, []);

  types.forEach(element => {
    element.id = getIdFromUrl(element.url);
  });
  
  return types.map((type) => (
    <PokemonType key={ type.id } type={ type }/>
  ));
}

export default TypeList;
