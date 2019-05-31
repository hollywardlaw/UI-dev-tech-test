import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { FiMenu, FiMoreHorizontal } from "react-icons/fi";
import { IconContext } from "react-icons";



const Header = props => {
  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <header className="header">

        <FiMenu className="menu" />

        <form className="form">
          <IoIosSearch />
          <label>Search</label><br></br>
          <input type="search" placeholder="Text input" required />
        </form>
        <FiMoreHorizontal className="more" />
      </header>
    </IconContext.Provider>
  );
};

export default Header;
