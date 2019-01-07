import React from 'react';

function Header() {
  return(
    <header>
      <h1 style={ headerStyle }>TodoList</h1>
    </header>
  )
}

const headerStyle = {
  textAlign: 'center',
  color: '#3484ab',
  padding: '10px'
}

export default Header