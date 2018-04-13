import React from 'react';
import classNames from 'classnames';

const Icon = ({ name, style, span }) => {
  const iconClass = classNames(
    `fa fa-${name}`
  )

  if (span) {
    return (
      <span className={iconClass} style={style}></span>
    )
  } else {
    return (
      <i className={iconClass} style={style}></i>
    )
  }
}

export default Icon;