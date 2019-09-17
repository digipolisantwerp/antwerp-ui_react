import React from 'react';
import classNames from 'classnames';

type Props = {
  /** Font Awesome icon name */
  name: string,
  style?: object,
  className?: string
};

const Icon = ({ name, style, className }: Props) => {
  const iconClass = classNames(className, `fa fa-${name}`);

  return <span className={iconClass} style={style}></span>;
};

export default Icon;
