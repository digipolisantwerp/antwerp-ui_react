import React, { MouseEvent } from 'react';
import { classNames } from '../../../utils/dom.utils';
import { Icon } from '../../base/icon';
import { TagProps } from './Tag.types';

export function Tag({ label, isToggle, active, iconLeft, removable, name, qa, onClick }: TagProps) {
  const [pressed, setPressed] = React.useState(active);
  const isRemovable = removable && !isToggle;
  const isPressed = active === true || active === false ? active : pressed;

  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    isToggle && setPressed(!pressed);
    return (isToggle || isRemovable) && onClick && onClick(event);
  };

  const TagElement = isToggle ? 'button' : 'div';
  const classes = classNames({
    'm-tag': true,
    'is-clickable': !!isRemovable
  });

  return (
    <TagElement className={classes} data-qa={qa} name={name} onClick={handleClick} aria-pressed={isPressed}>
      {iconLeft && (
        <div className="m-tag__icon">
          <Icon name={iconLeft} />
        </div>
      )}
      <div className="m-tag__label">{label}</div>
      {isRemovable ? (
        <button className="m-tag__button" aria-label="Delete">
          <Icon name="remove" />
        </button>
      ) : null}
    </TagElement>
  );
}

Tag.defaultProps = {
  name: 'aui-tag'
};

export default Tag;
