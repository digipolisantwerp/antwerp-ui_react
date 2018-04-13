import React, { Component, cloneElement } from 'react';

class Steps extends Component {
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
    const { className } = this.props;
    return (
      <div className={className}>
        <ol className="m-step-indicator">
          { this.props.children.map((child, i) => this.renderStep(child, i)) }
        </ol>
      </div>
    )
  }
}

export default Steps;