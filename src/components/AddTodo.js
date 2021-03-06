import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  //sets the title to whatever we type into the input field, since e.target.value will be the input field.
  onChange = (e) => this.setState({ title: e.target.value })

 

  render() {
    return (
      <div>
        <form onSubmit={ this.onSubmit } style={{ display: 'flex', margin: '10px' }}>
          <input 
          type="text" 
          name="title" 
          placeholder="Add Todo..."
          style={{ flex: '10', padding: '5px' }}
          // Takes the state Title value as the value
          value={ this.state.title }
          //handles the onChange event
          onChange={ this.onChange }
          />
          <input 
          type="submit" 
          value="Submit" 
          className="btn" 
          style={{flex: '1'}}
          />
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo
