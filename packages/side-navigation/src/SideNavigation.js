import * as React from 'react';

import ListElement from './listElement';

const SideNavigation = ({ children }) => (
  <ul className="m-nav-list m-nav-list--left">
    {
      children
    }
  </ul>
);

SideNavigation.ListElement = ListElement;

export default SideNavigation;
