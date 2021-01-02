import React, { Component } from 'react';

class PokemonType extends Component {
  render() {
    const {name} = this.props.type;
    return (
      <div>
        <p>{ name }</p>
      </div>
    )
  }
}

export default PokemonType;
