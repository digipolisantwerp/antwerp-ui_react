import React, { Component } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

import { FlyoutContent } from '../../flyout-button/src/FlyoutContent';

const flyoutSizes = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  full: 'full'
}

type FlyoutDirections = "left" |  "right";
type FlyoutSizes = "small" | "medium" | "large" | "full";

type Props = {
  trigger?: any,
  direction?: FlyoutDirections,
  size?: FlyoutSizes,
  hasPadding?: boolean,
  className?: string,
  open?: boolean,
  children?: any,
};

class Flyout extends Component<Props> {
  state = {
    isOpen: this.props.open
  }

  static defaultProps = {
    direction: 'left',
    size: 'medium',
    hasPadding: false,
    open: false,
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.open !== prevProps.open) {
      this.setState({ isOpen: !prevProps.open });  
    }
  }

  toggleIsOpen = () => {
    if(!this.state.isOpen){
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleOutsideClick = (e) => {
    const area = ReactDOM.findDOMNode(this.refs.flyout);
    if (area && !area.contains(e.target)) {
      this.toggleIsOpen();
    }
  }

  getClassNames = () => {
    return classNames(
      this.props.className,
      'm-flyout', 'm-flyout--scrollable', `m-flyout--${this.props.direction}`, {
        'is-open': this.state.isOpen,
        [`m-flyout--${flyoutSizes[this.props.size]}`]: !!flyoutSizes[this.props.size]
      });
  }

  render() {
    const {
      trigger,
      hasPadding,
      children
    } = this.props;
    const flyoutClass = this.getClassNames();
    return (
      trigger && (
      <div className={flyoutClass} ref="flyout">
          <div onClick={this.toggleIsOpen}> 
            {this.props.trigger}
          </div>
        <FlyoutContent hasPadding={hasPadding}>
          {this.props.children}
        </FlyoutContent>
      </div>
      )
    );
  }

}

export default Flyout;