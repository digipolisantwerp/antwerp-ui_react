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

let isFetching = false;

const Icon = ({ name, style, className, ariaLabel, onClick, src, qa }: Props) => {

  /**
   * Inject SVG icons from core branding into page
   */
  const fetchAntwerpIcons = async () => {
    try {
      const xlinkHref = 'https://cdn.antwerpen.be/core_branding_scss/5.0.0-beta.5/assets/images/ai.svg';
      const response = await fetch(xlinkHref);
      const svgText = await response.text();
      const svgWrapper = document.createElement('svg');

      svgWrapper.id = 'aiSvg';
      svgWrapper.innerHTML = svgText;
      if(!document.getElementById('aiSvg')) {
        document.body.appendChild(svgWrapper);
      }
    } catch(err) {
      throw new Error(err);
    } finally {
      isFetching = false;
    }
  }

  if(!document.getElementById('aiSvg') && !isFetching) {
    isFetching = true;
    fetchAntwerpIcons();
  }

  const href = name ? (name.substring(0, 3) === 'ai-' ? name : `ai-${name}`) : '';
  const iconClass = classNames(className, href, 'ai');

  return (
    <span className={iconClass} style={style} data-qa={qa} onClick={onClick}>
      {name && <svg aria-hidden="true"><use href={`#${href}`} /></svg>}
      {src}
      {ariaLabel && <span className="u-screen-reader-only">{ariaLabel}</span>}
    </span>
  );
};

export default Icon;
