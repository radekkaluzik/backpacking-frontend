import React from 'react';
import {
  Masthead, MastheadMain, MastheadBrand, MastheadContent,
} from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import logo from '../assets/images/brand.png';
import gearList from '../assets/icons/gear-list.svg';
import backpack from '../assets/icons/my-backpack.svg';
import NavLink from './NavLink';

const Header = () => (
  <Masthead id="basic">
    <MastheadMain>
      <MastheadBrand>
        <img src={logo} alt="Backpacking Logo" />
      </MastheadBrand>
    </MastheadMain>
    <MastheadContent style={{ marginLeft: 'auto' }}>
      <NavLink icon={gearList} name="My Gear" />
      <Link
        className="c-navLink"
        to="/backpack"
      >
        <NavLink
          icon={backpack}
          name="My Backpack"
          pathString="backpack"
        />
      </Link>
    </MastheadContent>
  </Masthead>
);

export default Header;
