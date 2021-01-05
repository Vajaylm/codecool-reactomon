import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { capitalize } from '../../utility/Util';
import AdvancedDetails from './AdvancedDetails';
import { useRouteMatch } from "react-router-dom";

const PokemonDetail = props => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const pokemonId = useRouteMatch("/pokemon/:pokemonId").params.pokemonId;

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonId)
      .then(response => { 
        setDetails(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, [pokemonId]);
  
  let content = <p>Loading...</p>;

  if (!isLoading) {
    console.log(details);
    const { name, height, weight } = details;
    content = 
    <div>
      <h1>Name: { capitalize(name) }</h1>
      <h3>ID: { pokemonId }</h3>
      <h3>Height: { height }</h3>
      <h3>Weight: { weight }</h3>
      <AdvancedDetails details={ details } />
    </div>
  }
  return content;
}

export default PokemonDetail;
