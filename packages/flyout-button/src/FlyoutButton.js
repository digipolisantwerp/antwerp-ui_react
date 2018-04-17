import React, { Component } from 'react';
import Button from '../../button';
import classNames from 'classnames';
import { FlyoutContent } from './FlyoutContent';
const flyoutSizes = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  full: 'full'
}

type FlyoutDirections = "left" |  "right";
type FlyoutSizes = "small" | "medium" | "large" | "full";

type Props = {
  label?: string,
  /** Flyout direction ("left" |  "right") */
  flyoutDirection?: FlyoutDirections,
  /** Flyout size ("small" | "medium" | "large" | "full") */
  flyoutSizes?: FlyoutSizes,
  flyourHasPadding?: boolean,
  /** Font Awesome icon name */
  icon?: string,
  children?: any,
};

class FlyoutButton extends Component<Props> {
  state = {
    isOpen: true
  }

  static defaultProps = {
    label: '',
    flyoutDirection: 'left',
    flyoutSize: 'medium',
    flyoutHasPadding: false,
    icon: false
  }

  handleClick = (event) => {
    if (this.containerRef && !this.containerRef.contains(event.target)) {
      this.close();
    }
  }

  close = () => this.setState({ isOpen: false })
  toggleIsOpen = () => this.setState({ isOpen: !this.state.isOpen })
  componentDidMount = () => document.addEventListener('mousedown', this.handleClick)
  componentWillUnMount = () => document.removeEventListener('mousedown', this.handleClick)

  getClassNames = () => {
    return classNames(
      'm-flyout', `m-flyout--${this.props.flyoutDirection}`, {
        'is-open': this.state.isOpen,
        [`m-flyout--${flyoutSizes[this.props.flyoutSize]}`]: !!flyoutSizes[this.props.flyoutSize]
      });
  }

  render() {
    const {
      label,
      flyoutHasPadding,
      children,
      ...buttonProps
    } = this.props;
    const flyoutClass = this.getClassNames();
    return (
      <div className={flyoutClass} ref={(ref) => { this.containerRef = ref }}>
        <Button {...buttonProps} onClick={this.toggleIsOpen}>
          {label}
        </Button>
        <FlyoutContent hasPadding={flyoutHasPadding}>
          {this.props.children}
        </FlyoutContent>
      </div>
    );
  }
}

export default FlyoutButton;