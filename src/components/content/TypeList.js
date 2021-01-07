import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonType from './PokemonType';
import { getIdFromUrl } from '../utility/Util';
import styled from 'styled-components';

const ContentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 10px;
`

const TypeList = props => {
  const [types, setTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://pokeapi.co/api/v2/type')
      .then(response => {
        setTypes(response.data.results);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  let content = (<p>Loading...</p>);

  if (!isLoading) {
    types.forEach(element => {
      element.id = getIdFromUrl(element.url);
    });
    
    content = (
      <ContentDiv>
        {types.map((type) => (
          <PokemonType key={ type.id } type={ type }/>
        ))}
      </ContentDiv>
    );
  }

  return content;
}

export default TypeList;
