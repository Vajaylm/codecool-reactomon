import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PokemonList from './components/content/PokemonList';
import TypeList from './components/content/TypeList';
import './App.css';

class App extends Component {
  state = {
    pokemons: [
      {
        name: "bulbasaur",
        id: 1,
        url: "https://pokeapi.co/api/v2/pokemon/1/"
      },
      {
        name: "ivysaur",
        id: 2,
        url: "https://pokeapi.co/api/v2/pokemon/2/"
      }
    ],
    types: [
      {
        name: "normal",
        id: 1,
        url: "https://pokeapi.co/api/v2/type/1/"
      },
      {
        name: "fighting",
        id: 2,
        url: "https://pokeapi.co/api/v2/pokemon/2/"
      }
    ]
  }
  
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/">
            <Redirect to="/pokemons" />
          </Route> 
          <Route path="/pokemons" render={props => (
            <PokemonList pokemons={this.state.pokemons} />
          )} />
          <Route path="/types" render={props => (
            <TypeList types={this.state.types}/>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
