import React from 'react';

const ButtonGroup = ({ children, style}) => {
  return (
    <div className="m-button-group" style={style}>
      {children}
    </div>
  )
}

export default ButtonGroup;