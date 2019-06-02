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
        <label className="label">Add task</label><br></br>
        <input className="input" type="input" onChange={event => this.handleChange('taskName', event.target.value)} required />
        <input className="text-input"
          placeholder="Process description" onChange={event => this.handleChange('processDescription', event.target.value)} required></input>
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
