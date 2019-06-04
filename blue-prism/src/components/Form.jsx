import React, { Component } from 'react';
import '../css/Form.css';

class Form extends Component {
  state = {
    taskName: '',
    processDescription: '',
  };
  render() {
    return (
      <form className="form" >
        <label htmlFor="add-task" className="label">Add task<br></br>
          <input id="add-task" className="input" type="input" onChange={event => this.handleChange('taskName', event.target.value)} required />
          <input className="text-input"
            placeholder="Process description" onChange={event => this.handleChange('processDescription', event.target.value)} required></input></label>
      </form>

    );
  };
  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };
}

export default Form;
