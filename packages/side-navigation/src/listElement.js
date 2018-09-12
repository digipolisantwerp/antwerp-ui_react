import React from 'react';


/**
 Notice:
 This component is meant to be used as the children for sideNavigation component, it
 enforces the right styling according to spec.
 * */


const ListElement = (props) => {
  const { children } = props;
  return (
    <li>{ children }</li>
  );
};

export default ListElement;
