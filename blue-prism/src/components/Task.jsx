import React, { Component } from 'react';
import { IoIosPlay, IoIosPause, IoMdEye } from "react-icons/io";
import Form from './Form';
import Controls from './Controls';
import '../css/Task.css';


class Task extends Component {
  state = {
    play: false
  };
  render() {
    return (
      <div>
        <section className="task">
          <Form />
          {this.state.play && <div className="inspect"> <IoMdEye className="eye-logo" /> <div className="progress-bar"> <span style={{ width: "75%" }}></span></div></div>}

          {!this.state.play ? <IoIosPlay className="play" onClick={this.handleClick} /> : <IoIosPause className="pause" onClick={this.handleClick} />}

          <Controls />

        </section>
      </div>
    );
  };
  handleClick = e => {
    this.setState({ play: !this.state.play })
  }
}

export default Task;
