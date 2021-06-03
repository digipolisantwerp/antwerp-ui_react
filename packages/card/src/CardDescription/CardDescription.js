import React from 'react';

type Props = {
  children?: any,
  style?: string,
};

const CardDescription = (props: Props) => {
  const { children, style } = props;
  return (
    <p style={style}>
      {children}
    </p>
  )
};

export default CardDescription;
