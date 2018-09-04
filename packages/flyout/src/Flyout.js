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
  flyoutDirection?: FlyoutDirections,
  flyoutSizes?: FlyoutSizes,
  flyourHasPadding?: boolean,
  open?: boolean,
  children?: any,
};

class Flyout extends Component<Props> {
  state = {
    isOpen: this.props.open
  }

  static defaultProps = {
    flyoutDirection: 'left',
    flyoutSize: 'medium',
    flyoutHasPadding: false,
    open: false,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      isOpen: nextProps.open
    };
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
      'm-flyout', 'm-flyout--scrollable', `m-flyout--${this.props.flyoutDirection}`, {
        'is-open': this.state.isOpen,
        [`m-flyout--${flyoutSizes[this.props.flyoutSize]}`]: !!flyoutSizes[this.props.flyoutSize]
      });
  }

  render() {
    const {
      trigger,
      flyoutHasPadding,
      children,
      ...flyoutProps
    } = this.props;
    const flyoutClass = this.getClassNames();
    return (
      <div className={flyoutClass} ref="flyout">
          <div onClick={this.toggleIsOpen}> 
            {this.props.trigger}
          </div>
        <FlyoutContent hasPadding={flyoutHasPadding}>
          {this.props.children}
        </FlyoutContent>
      </div>
    );
  }

}

export default Flyout;