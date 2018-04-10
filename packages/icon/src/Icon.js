import React from 'react';

const Icon = ({type, style}) => {
  return (
    <i class={`fa fa-${type}`} style={style}></i>
  )
}

export default Icon;