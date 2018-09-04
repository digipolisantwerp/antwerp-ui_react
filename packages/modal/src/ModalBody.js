// @flow
import * as React from 'react';

type Props = {
  children?: any
}

function ModalBody(props: Props) {
  const { children } = props;
  return (
    <div className="u-margin-bottom">
      {children}
    </div>
  );
}

ModalBody.defaultProps = {
  children: null,
};

export default ModalBody;
