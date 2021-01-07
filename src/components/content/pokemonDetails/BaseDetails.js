import React from 'react'
import styled from 'styled-components';
import { capitalize } from '../../utility/Util';

const ContentDiv = styled.div`
  grid-area: a;
  align-self: start;
  justify-self: start;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  background: #ffc904;
  color: #007fe2;
  height: 100%;
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    background: #007fe2;
    color: #ffc904;
  }
`

const DetailsDiv = styled.div`
  padding: 4px 16px;
`

const Img = styled.img`
  height: 80%;  
  object-fit: contain;
`

const BaseDetails = props => {
  const { name, pokemonId, height, weight, sprites } = props.details;
    
  return (
    <ContentDiv>
      <CardDiv>
        <Img src={sprites.front_shiny} alt='pokemon'></Img>
        <DetailsDiv>
          <h4>Name: { capitalize(name) }</h4>
          <h4>ID: { pokemonId }</h4>
          <h4>Height: { height }</h4>
          <h4>Weight: { weight }</h4>    
        </DetailsDiv>
      </CardDiv>
    </ContentDiv>
  )
}

export default BaseDetails
