//This import makes it so you don't have to type "extends React.Component" for classes... just "extends Component"
import React, { Component } from 'react';
import uuid from 'uuid';
import Header from './components/layout/Header';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

//Doesn't have to have "extends React.Component" because of the import above.
class App extends Component {

  state={
    todos: [
      {
      //Generates a random ID using UUID
        id: uuid.v4(),
        title: 'Take out Trash',
        completed: false
      },
      {
      //Generates a random ID using UUID
        id: uuid.v4(),
        title: 'Take out The Suze',
        completed: false
      },
      {
      //Generates a random ID using UUID
        id: uuid.v4(),
        title: 'Take out the cat',
        completed: false
      },
    ]
  }

  //Toggle complete
  markComplete = (id) => {
    this.setState({ 
      //Targets the todos
      todos: this.state.todos.map(todo => {
        //Looks to see if the todo ID is equal to the current iteration id
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      }) 
    });
  }

  // Delete Todo
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      //Generates a random ID using UUID
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  //lifecycle method, required to render the component.
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          {/* Here you place the name of the imported component with < /> as if its an HTML tag */}
          <AddTodo addTodo={ this.addTodo } />
          {/* passed the todos in State to the Todos component, the todos will be placed in the todos.props! */}
          <Todos todos={ this.state.todos } markComplete={ this.markComplete } deleteTodo={ this.deleteTodo } />
        </div>
      </div>
    );
  }
}


export default App;
