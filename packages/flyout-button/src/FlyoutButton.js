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

class FlyoutButton extends Component {
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
    const flyoutClass = this.getClassNames();
    return (
      <div className={flyoutClass} ref={(ref) => { this.containerRef = ref }}>
        <Button {...this.props} onClick={this.toggleIsOpen}>
          {this.props.label}
        </Button>
        <FlyoutContent hasPadding={this.props.flyoutHasPadding}>
          {this.props.children}
        </FlyoutContent>
      </div>
    );
  }
}

export default FlyoutButton;