//This import makes it so you don't have to type "extends React.Component" for classes... just "extends Component"
import React, { Component } from 'react';
//BrowserRouter is required when you have multiple pages
import { BrowserRouter, Route } from 'react-router-dom'
// import uuid from 'uuid';
import Header from './components/layout/Header';
import './App.css';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Todos from './components/Todos';
import axios from 'axios';

//Doesn't have to have "extends React.Component" because of the import above.
class App extends Component {

  state={
    todos: [ ]
  }

  //This is another lifecycle method (Other than Render)
  componentDidMount() {
    //Makes a get request for the JSON Placeholder
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=7')
    //Gives us a PROMISE that we assign the response to res.data
      .then(res => this.setState({
        //Assign the response data (res.data) to todos
        todos: res.data
      }))
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

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }));
  }

  //Add Todo
  addTodo = (title) => {
    // const newTodo = {
    //   //Generates a random ID using UUID
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
        // this.setState({
    //   todos: [...this.state.todos, newTodo]
    // })

    //Makes the request to the JSON Placeholder fake server
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }));

  }

  //lifecycle method, required to render the component.
  render() {
    return (
      //BrowserRouter is required when linking to other pages
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header />
            {/* Adding "exact" before the path makes it so it will only pull from that path, not anything within it. */}
              <Route exact path="/" render={ props => (
                <React.Fragment>
                  {/* Here you place the name of the imported component with < /> as if its an HTML tag */}
                  <AddTodo addTodo={ this.addTodo } />
                  {/* passed the todos in State to the Todos component, the todos will be placed in the todos.props! */}
                  <Todos todos={ this.state.todos } markComplete={ this.markComplete } deleteTodo={ this.deleteTodo } />
                </React.Fragment>
            )} />
            {/* Links directly to the about page */}
            <Route path="/about" component={ About } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
