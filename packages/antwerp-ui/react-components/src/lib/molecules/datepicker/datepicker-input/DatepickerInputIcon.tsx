import { classNames } from '../../../../utils/dom.utils';
import { ICONS_URL } from '../../../../constants/settings';
import { DatepickerInputIconProps } from '../datepicker.types';
import { forwardRef, KeyboardEvent } from 'react';

const ICONS_SVG_HTML_ID = 'ai-svg';

export const DatepickerInputIcon = forwardRef<HTMLSpanElement, DatepickerInputIconProps>(
  ({ onClick, onEnter }, ref) => {
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

    const handleEnter = (e: KeyboardEvent<HTMLSpanElement>) => {
      if (e.code === 'Enter' && onEnter) {
        onEnter(e);
      }
    };

    const classes = classNames({
      ai: true,
      'ai-calendar': true,
      'is-clickable': true
    });
    return (
      <span
        ref={ref}
        className={classes}
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleEnter}
        aria-label="Geopende kalender"
      >
        <svg aria-hidden="true">
          <use href="#ai-calendar" />
        </svg>
      </span>
    );
  }
);

export default DatepickerInputIcon;
