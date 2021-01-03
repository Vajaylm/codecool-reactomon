import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from '../utility/Util';

const Pokemon = props => {
  const { id, name } = props.pokemon;
  
  return (
    <div>
      <Link to={ '/pokemon/' + id }>{ capitalize(name) }<br /></Link>
    </div>
  )
}

export default Pokemon;
