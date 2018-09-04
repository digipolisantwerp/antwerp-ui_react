// @flow
import * as React from 'react';

type Props = {
  children?: any
}

function ModalText(props: Props) {
  const { children } = props;
  return (
    <p style={{ lineHeight: 1.3 }}>
      {children}
    </p>
  );
}

ModalText.defaultProps = {
  children: null,
};

export default ModalText;
