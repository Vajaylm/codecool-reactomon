import React from 'react';
import { capitalize } from '../utility/Util';
import styled from 'styled-components';

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

const PokemonType = props => {
  const { name } = props.type;
  
  let content = (
    <ContentDiv>
      <CardDiv>
        <NameDiv>
          <h4>{ capitalize(name) }</h4>
        </NameDiv>
      </CardDiv>
    </ContentDiv>
  );
  
  return content;
}

export default PokemonType;
