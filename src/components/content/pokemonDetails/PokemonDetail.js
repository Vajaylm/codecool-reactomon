import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BaseDetails from './BaseDetails';
import TypeDetails from './TypeDetails';
import StatDetails from './StatDetails';
import { useRouteMatch } from "react-router-dom";

const ContentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 10px;
  grid-template-areas:
    "a b"
    "a c";
`

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
    const { name, height, weight, sprites, types, stats } = details;
    content = (
      <ContentDiv>
        <BaseDetails details={ {name, pokemonId, height, weight, sprites} } />
        <TypeDetails types={ types } />
        <StatDetails stats={ stats } />
      </ContentDiv>
    );
  }
  return content;
}

export default PokemonDetail;
