// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../../icon';

const defaultClass = 'a-button'
const sizeClasses = {
  tiny: 'a-button--tiny',
  small: 'a-button--small',
  large: 'a-button--large',
}
const typeClasses = {
  primary: '',
  secondary: 'a-button--secondary',
  success: 'a-button--success',
  warning: 'a-button--warning',
  danger: 'a-button--danger',
};

class Button extends Component {
  render() {
    const {
      negative,
      outline,
      transparent,
      className,
      icon,
      iconLeft,
      iconRight,
      onClick,
      children,
      type,
      title, 
      size,
    } = this.props;
    const btnClass = classNames(
      'a-button',
      className,
      {
        [`${typeClasses[type]}`]: !!type,
        [`${sizeClasses[size]}`]: !!size,
        'has-icon': !!icon,
        'has-icon-left': !!iconLeft,
        'has-icon-right': !!iconRight,
        'a-button-transparent': !!transparent,
        'a-button-negative': !!negative,
        'a-button-outline': !!outline,
      }
    );

    return (
      <button className={btnClass} title={title || ''} onClick={onClick}>
        {icon ? <Icon name={icon} /> : null}
        {iconLeft ? <Icon name={iconLeft} /> : null}
        {iconRight ? <Icon name={iconRight} /> : null}
        {children}
      </button>
    )
  }
}


export default Button;