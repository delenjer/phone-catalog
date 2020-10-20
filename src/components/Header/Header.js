import React from 'react';
import PropTypes from 'prop-types';

import { Nav } from '../Nav/Nav';
import { Service } from '../Service/Service';

import './header.scss';

export const Header = ({ likePhoneId, cart, pathname }) => (
  <header id="header" className="header">
    <Nav pathname={pathname} />

    <Service
      likePhoneId={likePhoneId}
      cart={cart}
      pathname={pathname}
    />
  </header>
);

Header.propTypes = {
  likePhoneId: PropTypes.arrayOf(PropTypes.string).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  pathname: PropTypes.string.isRequired,
};
