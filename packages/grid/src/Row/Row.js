import React from 'react';
import classNames from 'classnames';

type Props = {
  style?: object,
  className?: string,
  children: Object,
};

const Row = (props: Props) => {
  const { style, className, children } = props;
  const rowClass = classNames(
    className,
    'row',
  );

  return (
    <div className={rowClass} style={style}>{children}</div>
  )
}

export default Row;