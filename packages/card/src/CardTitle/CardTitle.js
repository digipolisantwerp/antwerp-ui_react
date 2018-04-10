import React from 'react';

const CardTitle = ({ children, style }) => {
  return (
    <h5 class="u-margin-bottom-xs" style={style}>{children}</h5>
  )
}

export default CardTitle;