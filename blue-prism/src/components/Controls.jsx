import React from 'react';
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { TiStarOutline } from "react-icons/ti";
import { IoIosSettings } from "react-icons/io";
import '../css/Controls.css'

const Controls = props => {
  return (
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
  );
};

export default Controls;
