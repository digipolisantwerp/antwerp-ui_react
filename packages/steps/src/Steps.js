import React, { Component, cloneElement } from 'react';

type Props = {
  className?: string,
  /** Qa id */
  qa?: string,
};

class Steps extends Component<Props> {
  renderStep(child, i) {
    return cloneElement(
      child,
      {
        completed: (i < this.props.current),
        active: (i === this.props.current ),
      }
    )
  }

  render() {
    const { className, qa } = this.props;
    return (
      <div className={className} data-qa={qa}>
        <ol className="m-step-indicator">
          { this.props.children.map((child, i) => this.renderStep(child, i)) }
        </ol>
      </div>
    )
  }
}

export default Steps;