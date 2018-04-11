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
      message,
      description,
      closable,
      className,
    } = this.props;

    const alertClass = classNames(
      'm-alert',
      { [`${typeClasses[type]}`]: !!type },
      className,
    );

    const closeButton = closable ? (
      <Button type="warning" transparent icon="close" onClick={this.handleClose} className="m-alert__close">
      </Button>
    ) : null;
    const messageText = message ? (<h5 class="u-margin-bottom-xs">{message}</h5>) : null;
    const descriptionText = description ? (<p>{description}</p>) : null;

    return (
      <div class={alertClass}>
        {closeButton}
        {messageText}
        {descriptionText}
      </div>
    )
  }
}

export default Alert;