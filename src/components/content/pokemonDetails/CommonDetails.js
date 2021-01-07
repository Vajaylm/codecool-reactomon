import React from 'react'
import styled from 'styled-components';
import { capitalize } from '../../utility/Util';

const ContentDiv = styled.div`
  grid-area: b;
  align-self: center;
  justify-self: start;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 30%;
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

const DetailsDiv = styled.div`
  padding: 4px 16px;
`

const TypeDetails = props => {  
  return (
    <ContentDiv>
      <CardDiv>
        <DetailsDiv>
          <h3>Types:</h3>
          {props.types.map((type) => ( 
            <h4>{capitalize(type.type.name)}</h4>
          ))}    
        </DetailsDiv>
      </CardDiv>
    </ContentDiv>
  )
}

export default TypeDetails
