import React from 'react';
import classNames from 'classnames';

type Props = {
  /** Font Awesome icon name */
  name: string,
  style?: object,
  /** Use span tag instead of i */
  span?: boolean,
  className?: string,
  /** Qa id */
  qa?: string,
};

const Icon = (props: Props) => {
  const { name, style, className, qa } = props;
  const iconClass = classNames(
    className,
    `fa fa-${name}`
  );

  return (<span className={iconClass} style={style} data-qa={qa}></span>);
}

export default Icon;
