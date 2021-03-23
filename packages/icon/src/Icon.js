import React, { useState } from 'react';
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
let isFetching = false;
const Icon = ({ name, style, className, ariaLabel, onClick, qa }: Props) => {
  // const [svgData, setSVGData] = useState(cachedIcon);

    // Option 1
  // const iconClass = classNames(className, 'ai');
  // // const iconUrl = `https://cdn.antwerpen.be/core_branding_scss/5.0.0-beta.2/assets/icons/${name}.svg`; // Works
  // const iconUrl = `/ai.svg#${name}`; // Doesn't work
  // return (
  //
  //   <span className={iconClass} style={style} data-qa={qa} onClick={onClick}>
  //     <ReactSVG src={iconUrl} wrapper="span" className={iconClass} style={style} data-qa={qa} onClick={onClick} />
  //   </span>
  // )

  // Option 2
  const fetchAntwerpIcons = async () => {
    try {
      const xlinkHref = `https://cdn.antwerpen.be/core_branding_scss/5.0.0-beta.2/assets/images/ai.svg`;
      const response = await fetch(xlinkHref);
      const svgText = await response.text();
      const svgWrapper = document.createElement("svg");
      svgWrapper.id = "aiSvg";
      svgWrapper.innerHTML = svgText;
      if(!document.getElementById("aiSvg")) {
        document.body.appendChild(svgWrapper);
      }
    } catch(err) {
      // do nothing, just make sure it is executed again
    } finally {
      isFetching = false;

    }
  }
  if(!document.getElementById("aiSvg") && !isFetching) {
    isFetching = true;
    fetchAntwerpIcons();
  }

  const iconClass = classNames(className, 'ai');
  return (
    <span className={iconClass} style={style} data-qa={qa} onClick={onClick}>
      <svg><use href={`#${name}`} /></svg>
      {ariaLabel && <span className="u-screen-reader-only">{ariaLabel}</span>}
    </span>
  );

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
