import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { FiMenu, FiMoreHorizontal } from "react-icons/fi";
import { IconContext } from "react-icons";
import '../css/Header.css';



const Header = props => {
  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <header className="header">

        <FiMenu className="menu" />
        <IoIosSearch className="search" />
        <form className="form">

          <label className="label">Search</label><br></br>
          <input className="input" type="search" required />
        </form>
        <FiMoreHorizontal className="more" />
      </header>
    </IconContext.Provider>
  );
};

export default Header;
