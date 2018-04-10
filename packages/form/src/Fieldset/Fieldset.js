import React from 'react';

const Fielset = ({ legend, children, style}) => {
  return (
    <fieldset style={style}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  )
}

export default Fielset;