// @flow
import React from 'react';

type Props = {
  children: React.node
};

const AccordionTabHeader = ({ children }: Props) => (
  <div className="m-accordion__header">
    { children }
  </div>
);

export default AccordionTabHeader;
