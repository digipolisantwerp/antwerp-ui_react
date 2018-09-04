// @flow
import React, { Component } from 'react';

type Props = {
  children?: any
}

class ModalText extends Component<Props> {
  render() {
    const { children } = this.props;
    return (
      <p style={{ lineHeight: 1.3 }}>
        {children}
      </p>
    );
  }
}

export default ModalText;
