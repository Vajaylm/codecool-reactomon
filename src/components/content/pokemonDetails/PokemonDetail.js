import React, { Component } from 'react';
import axios from 'axios';
import Util from '../../utility/Util';
import AdvancedDetails from './AdvancedDetails';

class PokemonDetail extends Component {
  state = {
    details: []
  }
  
  componentDidMount() {
    const pokemon = this.props.pokemon[0];
    const id = Util.getIdFromUrl(pokemon.url);
    
    axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
      .then(response => ( 
        this.setState({ details: response.data })
      ));
  }
  
  render() {
    const { name, id, height, weight, stats } = this.state.details;
    
    if (stats !== undefined) {
      return (
        <div>
          <h1>Name: { Util.capitalize(name) }</h1>
          <h3>ID: { id }</h3>
          <h3>Height: { height }</h3>
          <h3>Weight: { weight }</h3>
          <AdvancedDetails details={ this.state.details } />
        </div>
      );
    }
    else { return null; }
  }
}

export default PokemonDetail;
