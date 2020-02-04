import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '../../button/src/Button';

const typeClasses = {
  success: 'm-alert--success',
  warning: 'm-alert--warning',
  danger: 'm-alert--danger',
};

type AlertTypes = "success" |  "warning" |  "danger";

type Props = {
  /** Type of alert ("success" |  "warning" |  "danger") */
  type?: AlertTypes,
  /** Title of alert */
  title?: string,
  /** Alert body */
  children?: any,
  closable?: boolean,
  ariaLabelClose?: string,
  className?: string,
  onClose?: Function,
  /** Qa id */
  qa?: string,
};

class Alert extends Component<Props> {
  state = {
    closing: true,
    closed: false
  };

  handleClose = (e) => {
    const {onClose} = this.props;
    e.preventDefault();
    onClose && onClose();
    this.setState({ closed: true })
  }

  render() {
    const {
      type,
      title,
      children,
      closable,
      ariaLabelClose = 'Sluiten',
      className,
      qa,
    } = this.props;
    const { closed } = this.state;

    const alertClass = classNames(
      'm-alert',
      { [`${typeClasses[type]}`]: !!type },
      className,
    );

    const closeButton = closable ? (
      <Button type={type} icon="close" onClick={this.handleClose} className="m-alert__close a-button-transparent" aria-label={ariaLabelClose}>
      </Button>
    ) : null;

    return (
      <div>
        {!closed ?
          <div className={alertClass} data-qa={qa}>
            {closeButton}
            {title && <h5 className="u-margin-bottom-xs">{title}</h5>}
            {children}
          </div>
          : <div />}
      </div>

    )
  }
}

export default Alert;
