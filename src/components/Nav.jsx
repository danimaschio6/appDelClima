import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import styles from "./Nav.module.css"
import { Link } from "react-router-dom"



function Nav({onSearch}) {
  return (
    <div className="navbar navbar-dark bg-dark">

      <Link to="/">
        <div className={styles.barra}>
          <img src={Logo} alt="" />
          <p className={styles.texto}>
          Weather App 😊</p>
        </div>
      </Link>

      <Link to="/about">
        <span>About</span>
      </Link>
      

      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
