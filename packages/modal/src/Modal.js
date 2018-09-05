// @flow
import * as React from 'react';
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
  onSubmit: Function,
  closeModal: Function
}

function Modal(props: Props) {
  const {
    type,
    size,
    title,
    children,
    closable,
    show,
    className,
    onSubmit,
    closeModal,
  } = props;

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
      onClick={closeModal}
      className={type ? 'm-modal__close' : 'm-modal__close a-button--default'} />
  ) : null;

  return (
    <div className={show ? 'm-overlay is-active' : 'm-overlay'}>
      <div className="m-overlay__inner">
        <form onSubmit={onSubmit}>
          <div className={sizeClass}>
            <div className="m-modal__content">
              <div className="m-modal__header">
                {closeButton}
                {title && <h6 style={{ fontWeight: 'bold', fontFamily: 'Antwerpen regular' }}>{title}</h6>}
              </div>
              {children}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  type: '',
  size: '',
  title: '',
  show: false,
  children: null,
  closable: false,
  className: '',
};

export default Modal;
