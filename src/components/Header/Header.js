import React from 'react';
import PropTypes from 'prop-types';

import { Nav } from '../Nav/Nav';
import { Service } from '../Service/Service';

import './header.scss';

export const Header = ({ likePhoneId }) => (
  <header id="header" className="header">
    <Nav />

    <Service likePhoneId={likePhoneId} />
  </header>
);

Header.propTypes = {
  likePhoneId: PropTypes.arrayOf(PropTypes.string).isRequired,
};
