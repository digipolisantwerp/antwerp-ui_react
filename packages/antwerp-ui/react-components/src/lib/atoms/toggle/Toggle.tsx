import { DEFAULT_SIZE, SIZE_MAPPING } from '../../../constants/layout.settings';
import { classNames } from '../../../utils/dom.utils';
import { Icon } from '../../base/icon';
import { ToggleProps } from './Toggle.types';

export function Toggle({
  checked,
  checkedTheme,
  checkedIcon,
  checkedLabel,
  id,
  onClick,
  qa,
  showLabels,
  size,
  uncheckedTheme,
  uncheckedIcon,
  uncheckedLabel
}: ToggleProps) {
  const handleClick = () => {
    onClick && onClick(!checked);
  };
  const toggleClass = classNames({
    'a-toggle': true,
    [`a-toggle--${SIZE_MAPPING[size || DEFAULT_SIZE]}`]: !!size
  });
  const buttonClasses = (theme?: string, icon?: string) => {
    return classNames({
      'a-button': true,
      [`a-button--${SIZE_MAPPING[size || DEFAULT_SIZE]}`]: !!size,
      [`a-button--${theme}`]: !!theme,
      'has-icon-left': !!showLabels && !!icon,
      'has-icon': !showLabels && !!icon,
      'a-toggle__on': true
    });
  };
  const checkedClasses = buttonClasses(checkedTheme, checkedIcon);
  const uncheckedClasses = buttonClasses(uncheckedTheme, uncheckedIcon);
  return (
    <div className={toggleClass} data-qa={qa}>
      <button className="a-toggle__button" id={id} aria-expanded={checked} onClick={handleClick}>
        <span className={checkedClasses}>
          {checkedIcon ? <Icon name={checkedIcon} screenReaderText={showLabels ? '' : checkedLabel} /> : null}
          {showLabels && <span className="a-toggle__label">{checkedLabel}</span>}
        </span>
        <span className={uncheckedClasses}>
          {uncheckedIcon ? <Icon name={uncheckedIcon} screenReaderText={showLabels ? '' : uncheckedLabel} /> : null}
          {showLabels && <span className="a-toggle__label">{uncheckedLabel}</span>}
        </span>
      </button>
    </div>
  );
}

Toggle.defaultProps = {
  checked: false,
  checkedLabel: '',
  checkedIcon: 'navigation-menu',
  checkedTheme: '',
  showLabels: false,
  uncheckedLabel: '',
  uncheckedIcon: 'close',
  uncheckedTheme: 'danger'
};

export default Toggle;
