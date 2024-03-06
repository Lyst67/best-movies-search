import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.header}>
      <nav className={css.header_nav}>
        <NavLink className={css.header_link} to="/">
          Home
        </NavLink>
        <NavLink className={css.header_link} to="/movies">
          Movies
        </NavLink>
      </nav>
      <h1 className={css.title}>BestMovies</h1>
    </div>
  );
};
export default Header;
