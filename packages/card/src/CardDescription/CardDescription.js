import React from 'react';

const CardDescription = ({children, style}) => {
  return (
    <p className="u-margin-bottom" style={style}>
      {children}
    </p>
  )
}

export default CardDescription;