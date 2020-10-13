import React from 'react';
import { NavLink } from 'react-router-dom';

import './service.scss';

export const Service = () => (
  <div className="service">
    <NavLink
      to="/favorite"
      className="service__link service__link--favorite"
    />

    <NavLink
      to="/cart"
      className="service__link service__link--cart"
    />
  </div>
);
