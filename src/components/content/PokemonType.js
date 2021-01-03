import React from 'react';
import { capitalize } from '../utility/Util';

const PokemonType = props => {
  const { name } = props.type;
  return (
    <div>
      <p>{ capitalize(name) }</p>
    </div>
  )
}

export default PokemonType;
