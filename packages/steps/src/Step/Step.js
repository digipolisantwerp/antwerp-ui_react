import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  /** Step title */
  title: string,
  active?: boolean,
  completed?: boolean,
  /** Aria label for the current step, defaults to 'Current:' */
  ariaLabelCurrent?: string,
  /** Aria label for the completed steps, defaults to 'Completed:' */
  ariaLabelCompleted?: string
};

class Step extends Component<Props> {
  render() {
    const { title, active, completed, ariaLabelCompleted = "Current:", ariaLabelCompleted = "Completed:" } = this.props;

    const stepClass = classNames({
      'is-active': !!active,
      'is-completed': !!completed
    });

    return (
      <li className={stepClass}>
        {!!completed ? <span class="u-screen-reader-only">{ariaLabelCompleted}</span> : ''}
        {!!active ? <span class="u-screen-reader-only">{ariaLabelCurrent}</span> : ''}
        <span className="m-step-indicator__label">{title}</span>
      </li>
    );
  }
}

export default Step;
