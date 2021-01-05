import React from 'react';
import logo from '../../images/pokemon_logo.png';
import styled from 'styled-components';

const Header = styled.header`
	text-align: center;
  padding: 10px;
`

const Img = styled.img`
  width: 30%;
`

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: translate(115%, 0px);
  width: 30%;
`

const A = styled.a`
  color: #333;
  padding: 5px 10px;
  font-size: 30px;
  transform: translate(${props => props.right ? '20%, 0px' : '-20%, 0px'});
  &:hover {
    -webkit-border-radius: 10px;
    font-weight: bold;
    background: #007fe2;
    color: #ffc904;
  }
`

const Span = styled.span`
  width: 10%;
`

const Navbar = props => {
  return (
    <Header>
      <Img src={logo} alt="Pokemon Logo" /><br/>
      <Div>
        <A href="/pokemons">Pokemons</A><A right href="/types">Types</A>
      </Div>
    </Header>
  );
}

export default Navbar;