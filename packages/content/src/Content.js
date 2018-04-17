import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
  children?: any,
};

const Content = (props: Props) => {
  const { className, children } = props;
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