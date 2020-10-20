import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './service.scss';

export const Service = ({ likePhoneId, cart, pathname }) => (
  <div className="service">
    <NavLink
      to="/favorite"
      className={
        pathname === '/cart'
          ? 'service__link service__link--favorite hide-component'
          : 'service__link service__link--favorite'
      }
    >
      {likePhoneId.length > 0 ? (
        <p className="service__link-count">{likePhoneId.length}</p>
      ) : (
        <p>{null}</p>
      )}

      <img src="./img/icons/favorite.svg" alt="Favorite" />
    </NavLink>

    <NavLink
      to="/cart"
      className="service__link service__link--cart"
    >
      {cart.length > 0 ? (
        <p className="service__link-count">{cart.length}</p>
      ) : (
        <p>{null}</p>
      )}

      <img src="./img/icons/cart.svg" alt="Favorite" />
    </NavLink>
  </div>
);

Service.propTypes = {
  likePhoneId: PropTypes.arrayOf(PropTypes.string).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  pathname: PropTypes.string.isRequired,
};
