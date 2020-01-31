// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../../icon/src/Icon';

const defaultClass = 'a-button';
const sizeClasses = {
  tiny: 'a-button--tiny',
  small: 'a-button--small',
  large: 'a-button--large',
};
const typeClasses = {
  primary: '',
  secondary: 'a-button--secondary',
  success: 'a-button--success',
  warning: 'a-button--warning',
  danger: 'a-button--danger',
  transparent: 'a-button--transparent',
  default: 'a-button--default'
};

type ButtonSizes = "tiny" | "small" | "large";
type ButtonTypes = "primary" | "secondary" | "success" | "warning" | "danger" | "transparent" | "default";

type Props = {
  title?: string,
  ariaLabel?: string,
  id?: string,
  negative?: boolean,
  outline?: boolean,
  transparent?: boolean,
  className?: string,
  type?: string,
  style?: object,
  children?: any,
  /** Font Awesome icon name */
  icon?: string,
  iconLeft?: string,
  iconRight?: string,
  size?: ButtonSizes,
  alt?: string,
  block?: boolean,
  disabled?: boolean,
  htmlType?: string,
  onClick?: (e: object) => void,
  /** Qa id */
  qa?: string,
}

class Button extends Component<Props> {
  render() {
    const {
      id,
      negative,
      outline,
      transparent,
      className,
      children,
      icon,
      iconLeft,
      iconRight,
      onClick,
      title = '',
      ariaLabel = '',
      alt = '',
      type,
      size,
      block = false,
      style = {},
      disabled = false,
      htmlType,
      qa,
    } = this.props;

    const btnClass = classNames(
      className,
      {
        'a-button': !outline && !negative,
        [`${typeClasses[type]}`]: !!type,
        [`${sizeClasses[size]}`]: !!size,
        'has-icon': !!icon,
        'has-icon-left': !!iconLeft,
        'has-icon-right': !!iconRight,
        'a-button-negative': !!negative,
        'a-button-outline': !!outline,
        'a-button-transparent': !!transparent,
        'a-button--block': block,
      }
    );

    return (
      <button
        id={id}
        className={btnClass}
        title={title || ''}
        onClick={onClick}
        style={style}
        alt={alt}
        disabled={disabled}
        type={htmlType}
        aria-label={ariaLabel}
        data-qa={qa}>
        {icon ? <Icon name={icon} /> : null}
        {iconLeft ? <Icon name={iconLeft} /> : null}
        {iconRight ? <Icon name={iconRight} /> : null}
        {children}
      </button>
    )
  }
}


export default Button;
