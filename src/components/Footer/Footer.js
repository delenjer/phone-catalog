import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Footer = () => (
  <footer className="footer">
    <div className="logo">
      <Link to="/" className="logo__link">Logo</Link>
    </div>

    <nav className="footer__nav">
      <Link
        to="https://github.com/"
        className="footer__nav-link"
      >
        Github
      </Link>

      <Link to="/" className="footer__nav-link">Contacts</Link>

      <Link to="/" className="footer__nav-link">rights</Link>
    </nav>

    <HashLink
      to={`${useLocation().pathname}#header`}
      className="top"
    >
      Back to top

      <span className="top__arrow">
        <img
          src="./img/icons/arrow_top.svg"
          alt="Arrow top"
          className="top__arrow--img"
        />
      </span>
    </HashLink>
  </footer>
);
