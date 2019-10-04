import React from 'react';

type Props = {
  style?: object,
  className?: string,
  children: Object,
};

const Grid = (props: Props) => {
  const { style, className, children } = props;

  return (
    <div className={className} style={style}>{children}</div>
  )
}

export default Grid;
