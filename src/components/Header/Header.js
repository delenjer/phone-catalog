import React from 'react';

import { Nav } from '../Nav/Nav';
import { Service } from '../Service/Service';

import './header.scss';

export const Header = () => (
  <header className="header">
    <Nav />

    <Service />
  </header>
);
