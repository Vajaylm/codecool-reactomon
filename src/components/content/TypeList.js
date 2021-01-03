import React from 'react';
import PokemonType from './PokemonType';
import { getIdFromUrl } from '../utility/Util';

const TypeList = props => {
  props.types.forEach(element => {
    element.id = getIdFromUrl(element.url);
  });
  
  return props.types.map((type) => (
    <PokemonType key={ type.id } type={ type }/>
  ));
}

export default TypeList;
