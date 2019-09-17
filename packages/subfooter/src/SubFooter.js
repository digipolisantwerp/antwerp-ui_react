import React from 'react';
import StandardSubFooter from './Blocks/StandardSubFooter';

import './Subfooter.scss';

type Props = {
  /** Get standard subfooter such as for type 'antwerpen' */
  type?: string,
  children?: any
};

const SubFooter = ({ type, children }: Props) => {
  return (
    <div className="aui-footer">
      <div className="u-container">
        <div className="row u-margin-bottom-xs">{type ? <StandardSubFooter type={type} /> : children}</div>
      </div>
    </div>
  );
};

export default SubFooter;
