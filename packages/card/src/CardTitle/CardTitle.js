import React from 'react';

type Props = {
  children?: any,
  style?: string,
};

const CardTitle = (props: Props) => {
  const { children, style } = props;
  return (
    <h5 className="u-margin-bottom-xs" style={style}>{children}</h5>
  )
};

export default CardTitle;
