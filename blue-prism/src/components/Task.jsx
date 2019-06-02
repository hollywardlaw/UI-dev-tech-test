import React, { Component } from 'react';
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { TiStarOutline } from "react-icons/ti";
import { IoIosSettings, IoIosPlay } from "react-icons/io";


class Task extends Component {
  state = {
    taskName: '',
    processDescription: ''
  };
  render() {
    return (
      <div>
        <section className="task">
          <form className="form" >
            <label className="label">Add task</label><br></br>
            <input className="input" type="input" onChange={event => this.handleChange('taskName', event.target.value)} required />
            <input className="text-input"
              placeholder="Process description" onChange={event => this.handleChange('processDescription', event.target.value)} required></input>
          </form>
          <IoIosPlay className="play" />
          <div className="controls">

            <p className="workers-assigned">Workers assigned</p>
            <FiMinusCircle className="minus" />
            <p className="count">0 / 25</p>
            <FiPlusCircle className="plus" />
            <p className="rating"><TiStarOutline className="star" /><TiStarOutline className="star" /><TiStarOutline className="star" /></p>
            <div className="bottom-bar">

              <IoIosSettings className="settings" />
              <p className="unassigned"
              >Unassigned</p>
            </div>

          </div>
        </section>
      </div>
    );
  };
  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };


}

export default Task;
