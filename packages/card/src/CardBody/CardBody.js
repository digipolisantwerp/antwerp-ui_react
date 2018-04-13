import React from 'react';

const CardBody = ({ children, style }) => {
  return (
    <div className="m-card__body" style={style}>
      {children}
    </div>
  )
}
export default CardBody;
