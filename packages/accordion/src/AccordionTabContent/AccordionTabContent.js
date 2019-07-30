// @flow
import React from 'react';

type Props = {
  children: React.node
};

const AccordionTabContent = ({ children, "data-qa": qa }: Props) => (
  <div className="m-accordion__content" data-qa={qa}>
    <div className="u-margin">
      { children }
    </div>
  </div>
);

export default AccordionTabContent;
