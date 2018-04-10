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
    return (
      <div class="u-wrapper u-margin-top u-margin-bottom">
        <div class="u-container">
          <ol class="m-step-indicator">
            { this.props.children.map((child, i) => this.renderStep(child, i)) }
          </ol>
        </div>
      </div>
    )
  }
}

export default Steps;