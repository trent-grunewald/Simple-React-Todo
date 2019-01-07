import React, { Component } from 'react'

export class AddTodo extends Component {

  state = {
    title: ''
  }

  //sets the title to whatever we type into the input field, since e will be the input field.
  onChange = (e) => this.setState({ title: e.target.value })

  render() {
    return (
      <div>
        <form style={{ display: 'flex', margin: '10px' }}>
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

export default AddTodo
