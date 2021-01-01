import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" render={props => (
            <h1>App</h1>
          )} />
          <Route path="/pokemons" render={props => (
            <h1>Pokemons</h1>
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
