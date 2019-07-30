import React from 'react';
import StandardSubFooter from './Blocks/StandardSubFooter';

import './Subfooter.scss';

const SubFooter = ({ type, children }) => {
  if (type) {
    return <StandardSubFooter type={type} />;
  }

  return (
    <div className="aui-footer">
      <div className="u-container">
        <div className="row u-margin-bottom-xs">{children}</div>
      </div>
    </div>
  );
};

export default SubFooter;
