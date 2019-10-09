import React from 'react';
import StandardSubFooter from './Blocks/StandardSubFooter';

import './SubFooter.scss';

type Props = {
  /** Get standard subfooter such as for type 'antwerpen' */
  type?: string,
  children?: any,
  /** Qa id */
  qa?: string,
}

const SubFooter = ({ type, children, qa }: Props) => {
  if (type) {
    return <StandardSubFooter type={type} data-qa={qa} />;
  }

  return (
    <div className="aui-footer" data-qa={qa}>
      <div className="u-container">
        <div className="row u-margin-bottom-xs">{children}</div>
      </div>
    </div>
  );
};

export default SubFooter;
