//This import makes it so you don't have to type "extends React.Component" for classes... just "extends Component"
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  //lifecycle method, required to render the component.
  render() {

    // This return itterates through the todos and for each todo it generates the title as an H3 html element
    return this.props.todos.map((todo) => (

      
      // This is basically saying "For each Todo, what do you want to render?" And we are rendering the TodoItem.js for each Todo... The Key is to make sure each item is unique so we don't get the React error message.
        <TodoItem key={ todo.id } todo={ todo } markComplete={ this.props.markComplete } deleteTodo= { this.props.deleteTodo }/>
      ));
  }
}

//PropTypes - Validation for properties that a component should have
Todos.propTypes ={
  todos: PropTypes.array.isRequired
}

export default Todos;
