import React, { Component } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

import FlyoutContent from '../../flyout-button/src/FlyoutContent';

const flyoutSizes = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  full: 'full'
};

type Props = {
  /** Component which triggers the flyout to open */
  trigger?: any,
  /** Direction */
  direction?: 'left' | 'right',
  /** Size */
  size?: 'small' | 'medium' | 'large' | 'full',
  hasPadding?: boolean,
  className?: string,
  open?: boolean,
  onStateChange?: Function,
  triggerClose?: Function,
  children?: any
};

class Flyout extends Component<Props> {
  state = {
    isOpen: this.props.open
  };

  flyoutRef = React.createRef();

  static defaultProps = {
    direction: 'left',
    size: 'medium',
    hasPadding: false,
    open: false,
    onStateChange: () => {},
    triggerClose: () => {},
    scrollable: false
  };

  componentDidMount() {
    const { isOpen } = this.state;

    if (isOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    }

    this.props.triggerClose(this.closeFlyout);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  componentDidUpdate(prevProps) {
    if (this.props.open !== prevProps.open) {
      this.setState({ isOpen: !prevProps.open });
    }
  }

  toggleIsOpen = () => {
    const { onStateChange } = this.props;

    if (!this.state.isOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState({ isOpen: !this.state.isOpen });
    onStateChange(this.state.isOpen);
  };

  closeFlyout = () => {
    const { onStateChange } = this.props;

    if (!this.state.isOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState({ isOpen: false });
    onStateChange(false);
  };

  handleOutsideClick = e => {
    const area = ReactDOM.findDOMNode(this.flyoutRef.current);
    if (area && !area.contains(e.target)) {
      this.closeFlyout();
    }
  };

  getClassNames = () => {
    return classNames(this.props.className, 'm-flyout', `m-flyout--${this.props.direction}`, {
      'is-open': this.state.isOpen,
      'm-flyout--scrollable': this.props.scrollable,
      [`m-flyout--${flyoutSizes[this.props.size]}`]: !!flyoutSizes[this.props.size]
    });
  };

  render() {
    const { trigger, hasPadding, children } = this.props;
    const { open } = this.state;
    const flyoutClass = this.getClassNames();
    return (
      trigger && (
        <div className={flyoutClass} ref={this.flyoutRef} aria-haspopup="true" aria-expanded={open}>
           <div onClick={this.toggleIsOpen}>
            {this.props.trigger}
          </div>
          <FlyoutContent hasPadding={hasPadding}>{children}</FlyoutContent>
        </div>
      )
    );
  }
}

export default Flyout;
