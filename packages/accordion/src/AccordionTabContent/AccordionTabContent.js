// @flow
import React from 'react';

type Props = {
  children: React.node
};

const AccordionTabContent = ({ children }: Props) => (
  <div className="m-accordion__content">
    <div className="u-margin">
      { children }
    </div>
  </div>
);

export default AccordionTabContent;
