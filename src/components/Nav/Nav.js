import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './nav.scss';

export const Nav = () => (
  <nav className="nav">
    <div className="logo">
      <Link to="/" className="logo__link">Logo</Link>
    </div>

    <ul className="nav__list">
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
