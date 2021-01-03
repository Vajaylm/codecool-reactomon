import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { capitalize } from '../../utility/Util';
import AdvancedDetails from './AdvancedDetails';
import { useRouteMatch } from "react-router-dom";

const PokemonDetail = props => {
  const [details, setDetails] = useState([]);
  const pokemonId = useRouteMatch("/pokemon/:pokemonId").params.pokemonId;
  console.log(pokemonId);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonId)
      .then(response => { setDetails(response.data) });
  }, [pokemonId]);
  
  const { name, height, weight, stats } = details;
  
  if (stats !== undefined) {
    return (
      <div>
        <h1>Name: { capitalize(name) }</h1>
        <h3>ID: { pokemonId }</h3>
        <h3>Height: { height }</h3>
        <h3>Weight: { weight }</h3>
        <AdvancedDetails details={ details } />
      </div>
    );
  }
  else { return null; }
}

export default PokemonDetail;
