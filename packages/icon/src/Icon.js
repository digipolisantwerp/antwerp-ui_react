import React from 'react';
import classNames from 'classnames';

type Props = {
  /** Font Awesome icon name */
  name: string,
  style?: object,
  /** Use span tag instead of i */
  span?: boolean,
};

const Icon = (props: Props) => {
  const { name, style, span } = props;
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