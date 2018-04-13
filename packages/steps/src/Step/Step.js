import React, { Component } from 'react';
import classNames from 'classnames';

class Step extends Component {
  render() {
    const {
      title,
      active,
      completed,
    } = this.props;

    const stepClass = classNames(
      {
        'is-active': !!active,
        'is-completed': !!completed,
      }
    );

    return (
      <li className={stepClass}>
        <span className="m-step-indicator__label">{title}</span>
      </li>
    )
  }
}

export default Step;