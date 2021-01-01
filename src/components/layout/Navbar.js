import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header style={navbarStyle}>
      <h1>Pokemon</h1>
      <Link style={linkStyle} to="/pokemons">Pokemons</Link> | <Link style={linkStyle} to="/types">Types</Link>
    </header>
  );
}

const navbarStyle = {
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Navbar;