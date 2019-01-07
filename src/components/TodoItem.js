import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: this.props.todo.completed ? '#b3b3b3' : '#3484ab',
      padding: '10px',
      borderBottom: '3px #fff dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  
  render() {
    //This makes it so we don't have to constantly type "This.props.todo"
    const { id, title } = this.props.todo;
    
    return (
      <div style={ this.getStyle() }>
        
        {/* Renders each Todo Title as a HTML P tag */}
        <p>
          {/* The ".bind(this, id) is needed to return the prop ID" */}
        <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) } /> 
        { ' ' }
        { title }
        {/* The ".bind(this, id) is needed to return the prop ID" */}
        <button onClick={ this.props.deleteTodo.bind(this, id) } style={ btnStyle }>X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

const btnStyle = {

  background: '#8a1010',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '20%',
  cursor: 'pointer',
  float: 'right'

}

export default TodoItem
