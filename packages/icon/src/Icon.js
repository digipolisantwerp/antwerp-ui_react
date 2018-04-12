import React from 'react';
import classNames from 'classnames';

const Icon = ({ name, style, span }) => {
  const iconClass = classNames(
    `fa fa-${name}`
  )

  if (span) {
    return (
      <span class={iconClass} style={style}></span>
    )
  } else {
    return (
      <i class={iconClass} style={style}></i>
    )
  }
}

export default Icon;