import React from 'react';

type Props = {
  children?: any,
  style?: string,
};

const CardBody = (props: Props) => {
  const { children, style } = props;
  return (
    <div className="m-card__body" style={style}>
      {children}
    </div>
  )
}
export default CardBody;
