// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '../../button/src/Button';

const sizeClasses = {
  default: '',
  large: 'm-modal--large',
};

type ModalSizes = "large"

type Props = {
  /** Size of modal */
  size?: ModalSizes,
  /** Title of modal */
  title?: string,
  /** Modal body */
  children?: any,
  closable?: boolean,
  className?: string
}

class Modal extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      closing: true,
      closed: false,
    };
  }

  handleClose = (e) => {
    e.preventDefault();
  }

  render() {
    const {
      size,
      title,
      children,
      closable,
      className,
    } = this.props;

    const sizeClass = classNames(
      'm-modal',
      { [`${sizeClasses[size]}`]: !!size },
      className,
    );

    const closeButton = closable ? (
      <Button
        transparent
        type="default"
        icon="close"
        onClick={this.handleClose}
        className="m-modal__close" />
    ) : null;

    return (
      <div className={sizeClass}>
        <div className="m-modal__content">
          <div className="m-modal__header u-margin-bottom-xs">
            {closeButton}
            {title && <h5>{title}</h5>}
          </div>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
