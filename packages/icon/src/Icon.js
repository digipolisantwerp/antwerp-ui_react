import React from 'react';
import classNames from 'classnames';

type Props = {
  /** Font Awesome icon name */
  name: string,
  style?: object,
  className?: string,
  /** optional ariaLabel: check WCAG compliance for extra info when a label is needed. */
  ariaLabel?: string,
  /** optional on click */
  onClick?: (e: object) => void,
  /** Qa id */
  qa?: string,
};

const Icon = ({ name, style, className, ariaLabel, onClick, qa }: Props) => {
  const iconClass = classNames(className, `fa fa-${name} ${name}`);

  return (
    <React.Fragment>
      <span className={iconClass} style={style} data-qa={qa} aria-hidden="true" onClick={onClick}></span>
      {ariaLabel && <span className="u-screen-reader-only">{ariaLabel}</span>}
    </React.Fragment>
  );
};

export default Icon;
