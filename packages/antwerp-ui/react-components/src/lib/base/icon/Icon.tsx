import { IconProps } from './Icon.types';
import { ICONS_URL, SCREEN_READER_CLASS } from '../../../constants/settings';
import { classNames } from '../../../utils/dom.utils';

const ICONS_SVG_HTML_ID = 'ai-svg';

export function Icon({ className, role, tabIndex, name, screenReaderText, thin, qa }: IconProps) {
  const fetchIcons = async function () {
    if (!fetch) return null;
    const response = await fetch(ICONS_URL);
    const svgText = await response.text();
    const svgWrapper = document.createElement('svg');
    svgWrapper.id = ICONS_SVG_HTML_ID;
    svgWrapper.innerHTML = svgText;
    if (!document.getElementById(ICONS_SVG_HTML_ID)) {
      document.body.appendChild(svgWrapper);
    }
  };
  if (typeof document !== 'undefined' && !document.getElementById(ICONS_SVG_HTML_ID)) {
    fetchIcons();
  }
  const classes = classNames({
    ai: true,
    [`ai-${name.replace('ai-', '')}`]: !!name,
    'ai--thin': !!thin,
    [`${className}`]: !!className
  });
  return (
    <span className={classes} role={role} tabIndex={tabIndex} data-qa={qa}>
      {name ? (
        <svg aria-hidden="true">
          <use href={`#ai-${name.replace('ai-', '')}`} />
        </svg>
      ) : null}
      {!!screenReaderText && <span className={SCREEN_READER_CLASS}>{screenReaderText}</span>}
    </span>
  );
}

export default Icon;
