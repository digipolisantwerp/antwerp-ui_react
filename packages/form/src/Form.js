import React from 'react';

const Form = ({children, style}) => {
  return (
    <div className="a-form" style={style}>
      {children}
    </div>
  )
}

export default Form;