import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = ({ onClose }) => {
  return (
    <nav className={css.header_nav}>
      <NavLink className={css.header_link} to="/" onClick={onClose}>
        Home
      </NavLink>
      <NavLink className={css.header_link} to="/movies" onClick={onClose}>
        Movies
      </NavLink>
    </nav>
  );
};
export default Navigation;
