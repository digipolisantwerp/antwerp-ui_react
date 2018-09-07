// @flow
import React from 'react';

type Props = {
  children?: React.Node,
};

const Accordion = ({ children }: Props) => <div className="m-accordion">{ children }</div>;

Accordion.defaultProps = {
  children: null,
};

export default Accordion;
