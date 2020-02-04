import React from 'react';
import classNames from 'classnames';

type Props = {
  /** Font Awesome icon name */
  name: string,
  style?: object,
  className?: string,
  /** optional ariaLabel: check WCAG compliance for extra info when a label is needed. */
  ariaLabel?: string,
  /** Qa id */
  qa?: string,
};

const Icon = ({ name, style, className, ariaLabel, qa }: Props) => {
  const iconClass = classNames(className, `fa fa-${name}`);

  return (
    <span className={iconClass} style={style} data-qa={qa}>
      {ariaLabel ? <span className="u-screen-reader-only">{ariaLabel}</span> : ''}
    </span>
  );
};

export default Icon;
