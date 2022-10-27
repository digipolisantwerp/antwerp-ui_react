import React from 'react';
import classNames from 'classnames';

type Props = {
  /** Streamline icon name */
  name: string,
  /** Add optional styling */
  style?: object,
  /** Add optional CSS class */
  className?: string,
  /** Add optional ariaLabel: check WCAG compliance for extra info when a label is needed. */
  ariaLabel?: string,
  /** Add optional onClick */
  onClick?: (e: object) => void,
  /** Provide your own SVG icon */
  src?: string,
  /** Qa id */
  qa?: string,
};

const Icon = ({ name, style, className, ariaLabel, onClick, src, qa }: Props) => {

  /**
   * Inject SVG icons from core branding into page
   */
  const fetchAntwerpIcons = function() {
    if (!fetch) return;

    try {
      const xlinkHref = 'https://cdn.antwerpen.be/core_branding_scss/5.0.0/assets/images/ai.svg';
      const response = fetch(xlinkHref)
        .then((response) => response.text())
        .then((svgText) => {
          const svgWrapper = document.createElement('svg');
    
          svgWrapper.id = 'aiSvg';
          svgWrapper.innerHTML = svgText;
          if(!document.getElementById('aiSvg')) {
            document.body.appendChild(svgWrapper);
          }
        });
    } catch(err) {
      throw new Error(err);
    }
  }

  if(typeof document !== 'undefined' && !document.getElementById('aiSvg')) {
    fetchAntwerpIcons();
  }

  const iconClass = classNames(className, name, 'ai');

  return (
    <span className={iconClass} style={style} data-qa={qa} onClick={onClick}>
      {name && <svg aria-hidden="true"><use href={`#${name}`} /></svg>}
      {src}
      {ariaLabel && <span className="u-screen-reader-only">{ariaLabel}</span>}
    </span>
  );
};

export default Icon;
