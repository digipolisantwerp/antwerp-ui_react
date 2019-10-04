import React from 'react';
import classNames from 'classnames';

type Props = {
  style?: object,
  className?: string,
  children: Object,
};

const Container = (props: Props) => {
  const { style, className, children } = props;
  const containerClass = classNames(
    className,
    'u-container',
  );

  return (
    <div className={containerClass} style={style}>{children}</div>
  )
}

export default Container;