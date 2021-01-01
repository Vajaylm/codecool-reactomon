import React from 'react';

function Navbar() {
  return (
    <header style={navbarStyle}>
      <h1>Pokemon</h1>
    </header>
  );
}

const navbarStyle = {
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
}

export default Navbar;