import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import PokemonList from './components/content/PokemonList';
import TypeList from './components/content/TypeList';
import './App.css';

class App extends Component {
  state = {
    pokemons: [],
    types: []
  }
  
  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => this.setState({ pokemons: response.data.results }));
    axios.get('https://pokeapi.co/api/v2/type')
      .then(response => this.setState({ types: response.data.results }));
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
