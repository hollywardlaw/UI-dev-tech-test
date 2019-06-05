import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { FiMenu, FiMoreHorizontal } from "react-icons/fi";
import { IconContext } from "react-icons";
import '../css/Header.css';



const Header = props => {
  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <header className="header">

        <FiMenu className="menu" alt="menu icon" />
        <IoIosSearch className="search" alt="search icon" />
        <form className="form">
          <label htmlFor="search" className="label">Search<br></br>
            <input id="search" className="input" type="search" required /></label>
        </form>
        <FiMoreHorizontal className="more" alt="more icon" />
      </header>
    </IconContext.Provider>
  );
};

export default Header;
