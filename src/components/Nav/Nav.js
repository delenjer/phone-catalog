import React from 'react';
import PropTypes from 'prop-types';

import { NavLink, Link } from 'react-router-dom';

import './nav.scss';

export const Nav = ({ pathname }) => (
  <nav className="nav">
    <div className="logo">
      <Link to="/" className="logo__link">Logo</Link>
    </div>

    <ul
      className={
        pathname === '/cart'
          ? 'nav__list hide-component'
          : 'nav__list'
      }
    >
      <li className="nav__item">
        <NavLink
          to="/"
          exact
          className="nav__link"
        >
          Home
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink
          to="/phones"
          className="nav__link"
        >
          Phones
        </NavLink>
      </li>
    </ul>
  </nav>
);

Nav.propTypes = {
  pathname: PropTypes.string.isRequired,
};
