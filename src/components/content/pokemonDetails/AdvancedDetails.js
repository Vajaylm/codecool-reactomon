import React from 'react'

const AdvancedDetails = props => {
  const { abilities, moves, types, stats } = props.details;
    
  return (
    <React.Fragment>
      <h3>Types:</h3>
      {types.map(type => (
        <h5>{ type.type.name }</h5>
      ))}
        
      <h3>Stats:</h3>
      {stats.map(stat => (
        <h5>{ stat.stat.name + ": " + stat.base_stat }</h5>
      ))}
      
      <h3>Abilities:</h3>
      {abilities.map(ability => (
        <h5>{ ability.ability.name }</h5>
      ))}
      
      <h3>Moves:</h3>
      {moves.map(move => (
        <h5>{ move.move.name }</h5>
      ))}
    </React.Fragment>
  )
}

export default AdvancedDetails
