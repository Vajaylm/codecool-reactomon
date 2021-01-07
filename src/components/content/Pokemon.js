import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { capitalize } from '../utility/Util';

const ContentDiv = styled.div`
  align-self: center;
  justify-self: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 50%;
`

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  background: #ffc904;
  color: #007fe2;
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    background: #007fe2;
    color: #ffc904;
  }
`

const NameDiv = styled.div`
  padding: 4px 16px;
`

const Pokemon = props => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id, name } = props.pokemon;
  
  useEffect(() => {
    setIsLoading(true);
    axios.get(props.pokemon.url)
      .then(response => { 
        setDetails(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, [props.pokemon.url]);
  
  let content = <p>Loading...</p>

  if (!isLoading) {
    content = (
      <ContentDiv>
        <Link to={ '/pokemon/' + id }>
          <CardDiv>
            <img src={details.sprites.front_shiny} alt='pokemon'></img>
            <NameDiv>
              <h4>{ capitalize(name) }</h4>
            </NameDiv>
          </CardDiv>
        </Link>
      </ContentDiv>
    );
  }

  return content;
}

export default Pokemon;
