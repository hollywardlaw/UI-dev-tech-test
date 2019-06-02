import React, { Component } from 'react';
import { IoIosPlay, IoIosPause, IoMdEye } from "react-icons/io";
import Form from './Form';
import Controls from './Controls';
import '../css/Task.css';


class Task extends Component {
  state = {
    play: false,
    inspect: false
  };
  render() {

    return (
      <div>
        <section className="task">
          <Form />
          {this.state.play && !this.state.inspect && <div className="inspect"> <IoMdEye className="eye-logo" onClick={event => this.handleClick('inspect', !this.state.inspect)} /> <div className="progress-bar"> <span style={{ width: "75%" }}></span></div></div>}

          {this.state.play && this.state.inspect && <div className="inspect"> <IoMdEye className="eye-logo" /> <div className="gradient-bar"> <ul className="list">
            <li>Tasks in queue: <b>6</b></li>
            <li>Average task time: <b>12s</b></li><br></br>
            <li>Tasks completed: <b>18</b></li>
            <li>Time remaining: <b>01:12</b></li>
          </ul></div></div>}

          {!this.state.play ? <IoIosPlay className="play" onClick={event => this.handleClick('play', !this.state.play)} /> : <IoIosPause className="pause" onClick={event => this.handleClick('play', !this.state.play)} />}

          <Controls />

        </section>
      </div>
    );
  };
  handleClick = (key, value) => {
    this.setState({ [key]: value })
  }
}

export default Task;
