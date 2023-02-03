import React, { cloneElement } from 'react';
import ReactModal from 'react-modal';
import { DEFAULT_SIZE, SIZE_MAP } from '../../../constants/layout.settings';
import { classNames } from '../../../utils/dom.utils';
import { Button } from '../../atoms/button';
import { ModalProps } from './Modal.types';

export function Modal({
  appRootId,
  ariaCloseLabel,
  cancelText,
  children,
  closeButton,
  confirmText,
  onAfterOpen,
  onCancel,
  onClose,
  onConfirm,
  open,
  qa,
  showCancel,
  showConfirm,
  size,
  title,
  trigger
}: ModalProps) {
  const [modalOpen, setModalOpen] = React.useState(!!open);
  const showModal = open === false || open === true ? open : modalOpen;

  const runFunctionAndClose = (toRun?: () => void) => {
    return toRun && typeof toRun === 'function'
      ? Promise.resolve(toRun()).then(() => setModalOpen(false))
      : setModalOpen(false);
  };

  const handleCancel = () => runFunctionAndClose(onCancel);
  const handleConfirm = () => runFunctionAndClose(onConfirm);
  const handleClose = () => runFunctionAndClose(onClose);

  return (
    <>
      {trigger ? cloneElement(trigger, { onClick: () => setModalOpen(true) }) : null}
      <ReactModal
        appElement={document.getElementById(appRootId) as HTMLElement}
        bodyOpenClassName={null}
        htmlOpenClassName={null}
        className={classNames({ 'm-modal': true, [`m-modal--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size })}
        isOpen={showModal}
        onRequestClose={handleClose}
        role="dialog"
        aria-modal="true"
        overlayClassName={classNames({
          'm-overlay': true,
          'is-active': true
        })}
        data-qa={qa}
        ariaHideApp={true}
        onAfterOpen={onAfterOpen}
        shouldCloseOnOverlayClick={true}
      >
        <div className="m-modal__content">
          {(title || closeButton) && (
            <div className="m-modal__header u-margin-bottom-xs">
              {title && <h6>{title}</h6>}
              {closeButton && (
                <Button
                  className="m-modal__close"
                  theme="neutral"
                  icon="ai-close"
                  ariaLabel={ariaCloseLabel}
                  transparent
                  onClick={handleClose}
                />
              )}
            </div>
          )}
          {children && <div className="u-margin-bottom">{children}</div>}
          {showConfirm || showCancel ? (
            <div className="m-modal__footer">
              {showConfirm && <Button onClick={handleConfirm}>{confirmText}</Button>}
              {showCancel && (
                <Button outline onClick={handleCancel}>
                  {cancelText}
                </Button>
              )}
            </div>
          ) : null}
        </div>
      </ReactModal>
    </>
  );
}

Modal.defaultProps = {
  ariaCloseLabel: 'Sluiten',
  cancelText: 'Annuleren',
  closeButton: true,
  confirmText: 'Bevestigen',
  showCancel: true,
  showConfirm: true,
  size: '',
  title: ''
};

export default Modal;
