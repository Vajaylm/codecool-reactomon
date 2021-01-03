import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import PokemonList from './components/content/PokemonList';
import TypeList from './components/content/TypeList';
import PokemonDetail from './components/content/pokemonDetails/PokemonDetail';
import './App.css';

const App = props => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => setPokemons(response.data.results));
    axios.get('https://pokeapi.co/api/v2/type')
      .then(response => setTypes(response.data.results));
  }, []);

  const content = (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/">
          <Redirect to="/pokemons" />
        </Route> 
        <Route path="/pokemons" render={props => (
          <PokemonList pokemons={ pokemons } />
        )} />
        <Route path="/types" render={props => (
          <TypeList types={ types } />
        )} />
        <Route path="/pokemon/:pokemonId" render={props => (
          <PokemonDetail />
        )} />
        <Route>
          <div>
            <p>Not found!</p>
          </div>
        </Route>
      </div>
    </Router>
  );

  return content;
}

export default App;
