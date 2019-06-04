import React, { Component } from 'react';
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
import '../css/Controls.css'

class Controls extends Component {
  state = {
    workers: 0,
    star1Clicked: false,
    star2Clicked: false,
    star3Clicked: false,
  }
  render() {

    const { workers, star1Clicked, star2Clicked, star3Clicked } = this.state;
    return (
      <div className="controls">
        <p className="workers-assigned">Workers assigned</p>
        <FiMinusCircle className="minus" onClick={event => this.handleClick('workers', -1)} />
        <p className="count">{workers} / 25</p>
        <FiPlusCircle className="plus" onClick={event => this.handleClick('workers', 1)} />


        {star1Clicked && <p className="rating">
          <TiStarFullOutline className="yellow-star" onClick={event => this.handleStarClick('star1Clicked', !star1Clicked)} />
          <TiStarOutline className="star" onClick={event => this.handleStarClick('star2Clicked', !star2Clicked)} />
          <TiStarOutline className="star" onClick={event => this.handleStarClick('star3Clicked', !star3Clicked)} />
        </p>}
        {star2Clicked && <p className="rating">
          <TiStarFullOutline className="yellow-star" onClick={event => this.handleStarClick('star1Clicked', !star1Clicked)} />
          <TiStarFullOutline className="yellow-star" onClick={event => this.handleStarClick('star2Clicked', !star2Clicked)} />
          <TiStarOutline className="star" onClick={event => this.handleStarClick('star3Clicked', !star3Clicked)} />
        </p>}
        {star3Clicked && <p className="rating">
          <TiStarFullOutline className="yellow-star" onClick={event => this.handleStarClick('star1Clicked', !star1Clicked)} />
          <TiStarFullOutline className="yellow-star" onClick={event => this.handleStarClick('star2Clicked', !star2Clicked)} />
          <TiStarFullOutline className="yellow-star" onClick={event => this.handleStarClick('star3Clicked', !star3Clicked)} />
        </p>}

        <p className="rating">
          <TiStarOutline className="star" onClick={event => this.handleStarClick('star1Clicked', !star1Clicked)} />
          <TiStarOutline className="star" onClick={event => this.handleStarClick('star2Clicked', !star2Clicked)} />
          <TiStarOutline className="star" onClick={event => this.handleStarClick('star3Clicked', !star3Clicked)} />
        </p>

        <div className="bottom-bar">

          <IoIosSettings className="settings" onClick={this.props.handleSettingsClick} />
          {workers > 0 ? <p className="assigned-unassigned"
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
  handleStarClick = (star, value) => {
    this.setState({ [star]: value })
  }
};

export default Controls;
