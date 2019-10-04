import React from 'react';
import classNames from 'classnames';

type Props = {
  style?: object,
  className?: string,
  children: Object,
};

const Wrapper = (props: Props) => {
  const { style, className, children } = props;
  const containerClass = classNames(
    className,
    'u-wrapper',
  );

  return (
    <div className={containerClass} style={style}>{children}</div>
  )
}

export default Wrapper;