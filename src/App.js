import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/layout/Navbar';
import PokemonList from './components/content/PokemonList';
import TypeList from './components/content/TypeList';
import PokemonDetail from './components/content/pokemonDetails/PokemonDetail';
import './App.css';

const NavigationDiv = styled.div`
  width: 80%;
  font-family: Marker Felt, fantasy;
  transform: translate(10%, 0px);
`

const ContentDiv = styled.div`
  width: 80%;
  font-family: Marker Felt, fantasy;
  transform: translate(10%, 0px);
`

const App = props => {
  const content = (
    <Router>
      <NavigationDiv>
        <Navbar />
      </NavigationDiv>
      <ContentDiv>
        <Route exact path="/">
          <Redirect to="/pokemons" />
        </Route> 
        <Route path="/pokemons" render={props => (
          <PokemonList />
          )} />
        <Route path="/types" render={props => (
          <TypeList />
          )} />
        <Route path="/pokemon/:pokemonId" render={props => (
          <PokemonDetail />
          )} />
      </ContentDiv>
    </Router>
  );

  return content;
}

export default App;
