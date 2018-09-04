// @flow
import * as React from 'react';

type Props = {
  /** Modal footer */
  children?: any
}

function ModalFooter(props: Props) {
  const { children } = props;
  return (
    <div className="m-modal__footer">
      {children}
    </div>
  );
}

ModalFooter.defaultProps = {
  children: null,
};

export default ModalFooter;
