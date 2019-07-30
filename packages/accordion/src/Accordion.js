// @flow
import React from 'react';

type Props = {
  children?: React.Node,
};

const Accordion = ({ children, "data-qa": qa }: Props) => <div className="m-accordion" data-qa={qa}>{ children }</div>;

Accordion.defaultProps = {
  children: null,
};

export default Accordion;
