// @flow
import React from 'react';

type Props = {
  children: React.node
};

const AccordionTabHeader = ({ children, "data-qa": qa }: Props) => (
  <div className="m-accordion__header" data-qa={qa}>
    { children }
  </div>
);

export default AccordionTabHeader;
