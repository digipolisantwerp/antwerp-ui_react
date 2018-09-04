// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Button } from '../../button';

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

type State = {
  show: boolean
}

class Modal extends React.Component<Props, State> {
  static defaultProps = {
    type: '',
    size: '',
    title: '',
    show: false,
    children: null,
    closable: false,
    className: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
    };
  }

  componentDidUpdate(prevProps) {
    const { show } = this.props;
    if (prevProps.show !== show) {
      this.setState({ show }); // eslint-disable-line
    }
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
      <div className={show ? 'm-overlay is-active' : 'm-overlay'}>
        <div className="m-overlay__inner">
          <form onSubmit={onSubmit}>
            <div className={sizeClass}>
              <div className="m-modal__content">
                <div className="m-modal__header u-margin-bottom-xs">
                  {closeButton}
                  {title && <h6>{title}</h6>}
                </div>
                {children}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
