import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  /** Step title */
  title: string,
  active?: boolean,
  completed?: boolean,
};

class Step extends Component<Props> {
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