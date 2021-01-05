import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import PokemonList from './components/content/PokemonList';
import TypeList from './components/content/TypeList';
import PokemonDetail from './components/content/pokemonDetails/PokemonDetail';
import './App.css';

const App = props => {
  const content = (
    <Router>
      <div>
        <Navbar />
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
      </div>
    </Router>
  );

  return content;
}

export default App;
