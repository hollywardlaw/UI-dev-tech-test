import React, { Component } from 'react';
import { IoIosPlay, IoIosPause, IoMdEye } from "react-icons/io";
import Form from './Form';
import Controls from './Controls';
import '../css/Task.css';


class Task extends Component {
  state = {
    play: false,
    inspect: false,
    settingsClicked: false,
  };
  render() {
    const { play, inspect, settingsClicked } = this.state;
    return (
      <div>
        <section className="task">
          <Form />
          {play && !inspect && <div className="inspect"> <IoMdEye className="eye-logo" onClick={event => this.handleClick('inspect', !inspect)} /> <div className="progress-bar"> <span style={{ width: "75%" }}></span></div></div>}

          {play && inspect && <div className="inspect"> <IoMdEye className="eye-logo" /> <div className="gradient-bar"> <ul className="list">
            <li className="list-item">Tasks in queue: <b>6</b></li>
            <li className="list-item">Average task time: <b>12s</b></li><br></br>
            <li className="list-item">Tasks completed: <b>18</b></li>
            <li className="list-item">Time remaining: <b>01:12</b></li>
          </ul></div></div>}

          {!play ? <IoIosPlay className="play" onClick={event => this.handleClick('play', !play)} /> : <IoIosPause className="pause" onClick={event => this.handleClick('play', !play)} />}

          <Controls handleSettingsClick={this.handleSettingsClick} />

        </section>
        {settingsClicked && <div className="setting-div">
          <div class="speech-bubble">
            <ul className="setting-options">
              <li >Auto-assign</li>
              <li>Select workers</li>
              <li>Schedule</li>
              <li>Archive</li>
            </ul>
          </div>
        </div>
        }
      </div>
    );
  };
  handleClick = (key, value) => {
    this.setState({ [key]: value })
  }
  handleSettingsClick = () => {
    this.setState({ settingsClicked: !this.state.settingsClicked })
  }
}

export default Task;
