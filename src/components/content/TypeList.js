import React, { Component } from 'react';
import PokemonType from './PokemonType';
import Util from '../utility/Util';

class TypeList extends Component {
  render() {
		this.props.types.forEach(element => {
      element.id = Util.getIdFromUrl(element.url);
		});
		
		return this.props.types.map((type) => (
      <PokemonType key={type.id} type={type}/>
    ));
	}
}

export default TypeList;
