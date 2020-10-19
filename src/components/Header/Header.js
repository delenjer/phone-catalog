import React from 'react';
import PropTypes from 'prop-types';

import { Nav } from '../Nav/Nav';
import { Service } from '../Service/Service';

import './header.scss';

export const Header = ({ likePhoneId, cart }) => (
  <header id="header" className="header">
    <Nav />

    <Service
      likePhoneId={likePhoneId}
      cart={cart}
    />
  </header>
);

Header.propTypes = {
  likePhoneId: PropTypes.arrayOf(PropTypes.string).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
