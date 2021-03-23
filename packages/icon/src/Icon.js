import React from 'react';
import { render } from 'react-dom';
import { ReactSVG } from 'react-svg';
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

  const iconClass = classNames(className, 'ai');
  // const iconUrl = `https://cdn.antwerpen.be/core_branding_scss/5.0.0-beta.2/assets/icons/${name}.svg`; // Works
  const iconUrl = `https://cdn.antwerpen.be/core_branding_scss/5.0.0-beta.2/assets/images/ai.svg#${name}`; // Doesn't work
  return (

    // Option 1
    <span className={iconClass} style={style} data-qa={qa} onClick={onClick}>
      <ReactSVG src={iconUrl} wrapper="span" className={iconClass} style={style} data-qa={qa} onClick={onClick} />
    </span>
  )

  // Option 2
  // const iconClass = classNames(className, 'ai');
  // const xlinkHref = `https://cdn.antwerpen.be/core_branding_scss/5.0.0-beta.2/assets/images/ai.svg#${name}`;
  // return (
  //   <span className={iconClass} style={style} data-qa={qa} onClick={onClick}>
  //     <svg aria-hidden="true"><use href={xlinkHref} /></svg>
  //     {ariaLabel && <span className="u-screen-reader-only">{ariaLabel}</span>}
  //   </span>
  // );

  // Option 3
  // const iconClass = classNames(className, `fa fa-${name} ${name}`);
  // return (
  //   <React.Fragment>
  //     <span className={iconClass} style={style} data-qa={qa} aria-hidden="true" onClick={onClick}></span>
  //     {ariaLabel && <span className="u-screen-reader-only">{ariaLabel}</span>}
  //   </React.Fragment>
  // );
};

export default Icon;
