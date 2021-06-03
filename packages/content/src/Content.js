import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
  children?: any,
  /** Qa id */
  qa?: string,
};

const Content = (props: Props) => {
  const { className, children, qa } = props;
  const contentClass = classNames(
    'u-wrapper',
    className,
  );
  return (
    <div className={contentClass}>
      <div className="u-container" data-qa={qa}>
        {children}
      </div>
    </div>
  )
};

export default Content;
