import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PokemonList from './components/content/PokemonList';
import './App.css';

class App extends Component {
  render() {
    return (
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
            <h1>Types</h1>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
