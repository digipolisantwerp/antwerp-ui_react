import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '../../button';

const typeClasses = {
  success: 'm-alert--success',
  warning: 'm-alert--warning',
  danger: 'm-alert--danger',
};

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closing: true,
      closed: false
    };
  }

  handleClose(e) {
    e.preventDefault();
  }

  render() {
    const {
      type,
      title,
      children,
      closable,
      className,
    } = this.props;

    const alertClass = classNames(
      'm-alert',
      { [`${typeClasses[type]}`]: !!type },
      className,
    );

    const closeButton = closable ? (
      <Button type={type} transparent icon="close" onClick={this.handleClose} className="m-alert__close">
      </Button>
    ) : null;

    return (
      <div className={alertClass}>
        {closeButton}
        {this.props.title && <h5 className="u-margin-bottom-xs">{this.props.title}</h5>}
        {children}
      </div>
    )
  }
}

export default Alert;