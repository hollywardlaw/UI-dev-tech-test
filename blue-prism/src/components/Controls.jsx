import React, { Component } from 'react';
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { TiStarOutline } from "react-icons/ti";
import { IoIosSettings } from "react-icons/io";
import '../css/Controls.css'

class Controls extends Component {
  state = {
    workers: 0
  }
  render() {
    return (
      <div className="controls">
        <p className="workers-assigned">Workers assigned</p>
        <FiMinusCircle className="minus" onClick={event => this.handleClick('workers', -1)} />
        <p className="count">{this.state.workers} / 25</p>
        <FiPlusCircle className="plus" onClick={event => this.handleClick('workers', 1)} />
        <p className="rating"><TiStarOutline className="star" /><TiStarOutline className="star" /><TiStarOutline className="star" /></p>
        <div className="bottom-bar">

          <IoIosSettings className="settings" />
          {this.state.workers > 0 ? <p className="assigned-unassigned"
          >Assigned</p> : <p className="assigned-unassigned"
          >Unassigned</p>}

        </div>
      </div>
    );
  }

  handleClick = (key, value) => {
    const { workers } = this.state
    if (workers + value >= 0 && workers + value <= 25) {
      this.setState({ [key]: workers + value })
    }
  }

};

export default Controls;
