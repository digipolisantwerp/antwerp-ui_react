import React from 'react';

const CardDescription = ({children, style}) => {
  return (
    <p class="u-margin-bottom" style={style}>
      {children}
    </p>
  )
}

export default CardDescription;