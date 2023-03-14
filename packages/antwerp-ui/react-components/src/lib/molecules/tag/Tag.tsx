import React, { createElement } from 'react';
import { classNames } from '../../../utils/dom.utils';
import { Icon } from '../../base/icon';
import { TagProps } from './Tag.types';

export function Tag({ label, isToggle, active, iconLeft, removable, name, qa, onClick, ariaLabelDelete }: TagProps) {
  const [pressed, setPressed] = React.useState(active);
  const isRemovable = removable && !isToggle;
  const isPressed = active === true || active === false ? active : pressed;

  const handleClick = (clickedName: string) => {
    isToggle && setPressed(!pressed);
    return (isToggle || isRemovable) && onClick && onClick(clickedName);
  };

  const TagElement = isToggle ? 'button' : 'div';
  const classes = classNames({
    'm-tag': true,
    'is-clickable': !!isRemovable
  });
  const toggleProps = {
    name,
    onClick: () => handleClick(name),
    'aria-pressed': isPressed
  };

  return createElement(
    TagElement,
    {
      className: classes,
      'data-qa': qa,
      ...(isToggle ? toggleProps : {})
    },
    <>
      {iconLeft && (
        <div className="m-tag__icon">
          <Icon name={iconLeft} />
        </div>
      )}
      <div className="m-tag__label">{label}</div>
      {isRemovable ? (
        <button
          className="m-tag__button"
          name={`${name}-delete`}
          onClick={() => handleClick(`${name}-delete`)}
          aria-label={ariaLabelDelete}
        >
          <Icon name="remove" />
        </button>
      ) : null}
    </>
  );
}

Tag.defaultProps = {
  ariaLabelDelete: 'Verwijderen'
};

export default Tag;
