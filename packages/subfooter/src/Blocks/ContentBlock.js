import React from 'react';

const ContentBlock = ({
  children,
  xs = 12,
  sm = 4,
  md = 4,
  lg = 4,
}) => {
  return (
    <div className={`col-xs-${xs} col-sm-${sm} col-md-${md} col-lg-${lg}`}>
      {children}
    </div>
  )
};

export default ContentBlock;
