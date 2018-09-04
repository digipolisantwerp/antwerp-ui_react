// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '../../button/src/Button';

const sizeClasses = {
  default: '',
  large: 'm-modal--large',
};

type ModalTypes = "success" | "warning" | "danger"

type ModalSizes = "large"

type Props = {
  /** Type of modal */
  type?: ModalTypes,
  /** Size of modal */
  size?: ModalSizes,
  /** Title of modal */
  title?: string,
  /** Visibility of modal */
  show?: boolean,
  /** Modal body */
  children?: any,
  closable?: boolean,
  className?: string,
  /** Modal functionality */
  onSubmit: Function
}

class Modal extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
    };
  }

  handleClose = (e) => {
    e.preventDefault();
    this.setState(state => ({ ...state, show: false }));
  }

  render() {
    const {
      type,
      size,
      title,
      children,
      closable,
      className,
      onSubmit,
    } = this.props;

    const { show } = this.state;

    const sizeClass = classNames(
      'm-modal',
      { [`${sizeClasses[size]}`]: !!size },
      className,
    );

    const closeButton = closable ? (
      <Button
        transparent
        type={type}
        icon="close"
        onClick={this.handleClose}
        className={type ? 'm-modal__close' : 'm-modal__close a-button--default'} />
    ) : null;

    return (
      <form onSubmit={onSubmit} style={{ display: show ? 'block' : 'none' }}>
        <div className={sizeClass}>
          <div className="m-modal__content">
            <div className="m-modal__header u-margin-bottom-xs">
              {closeButton}
              {title && <h5>{title}</h5>}
            </div>
            {children}
          </div>
        </div>
      </form>
    );
  }
}

export default Modal;
