import React from 'react';
//Have to import link when linking to other pages using React Router
import { Link } from 'react-router-dom';

function Header() {
  return(
    <header style={ headerStyle }>
      <h1>TodoList</h1>
      <Link style={ linkStyle } to="/">Home</Link> | <Link style={ linkStyle } to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  textAlign: 'center',
  color: '#3484ab',
  padding: '10px'
}

const linkStyle = {
  color: '#000',
}

export default Header