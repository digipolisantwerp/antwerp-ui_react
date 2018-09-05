// @flow
import * as React from 'react';
import classNames from 'classnames';

const marginTopSizes = {
  default: 'u-margin-top',
  xs: 'u-margin-top-xs',
  lg: 'u-margin-top-lg',
  xx: 'u-margin-top-xx',
};

const marginBottomSizes = {
  default: 'u-margin-top',
  xs: 'u-margin-bottom-xs',
  lg: 'u-margin-bottom-lg',
  xx: 'u-margin-bottom-xx',
};

type ModalMarginSizes = 'lg' | 'xs' | 'xx'

type Props = {
  children?: any,
  marginTop?: ModalMarginSizes,
  marginBottom?: ModalMarginSizes
}


function ModalBody(props: Props) {
  const { children, marginTop, marginBottom } = props;

  const customClasses = classNames(
    marginBottomSizes[marginBottom],
    marginTopSizes[marginTop],
  );

  return (
    <div className={customClasses}>
      {children}
    </div>
  );
}

ModalBody.defaultProps = {
  children: null,
  marginTop: 'default',
  marginBottom: 'default',
};

export default ModalBody;
