import React from 'react';

const Form = ({children, style}) => {
  return (
    <div class="a-form" style={style}>
      {children}
    </div>
  )
}

export default Form;