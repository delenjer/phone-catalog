import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './service.scss';

export const Service = ({ likePhoneId }) => (
  <div className="service">
    <NavLink
      to="/favorite"
      className="service__link service__link--favorite"
    >
      {likePhoneId.length > 0 ? (
        <p className="service__link-count">{likePhoneId.length}</p>
      ) : (
        <p>{null}</p>
      )}
    </NavLink>

    <NavLink
      to="/cart"
      className="service__link service__link--cart"
    />
  </div>
);

Service.propTypes = {
  likePhoneId: PropTypes.arrayOf(PropTypes.string).isRequired,
};
