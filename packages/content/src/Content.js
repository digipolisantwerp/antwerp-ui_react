import React from 'react';
import classNames from 'classnames';

const Content = ({ className, children }) => {
  const contentClass = classNames(
    'u-wrapper',
    className,
  );
  return (
    <div className={contentClass}>
      <div className="u-container">
        {children}
      </div>
    </div>
  )
}

export default Content;