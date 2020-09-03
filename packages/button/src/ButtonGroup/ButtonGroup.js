// @flow
import React from 'react';
import classNames from 'classnames';

type Direction = "horizontal" | "vertical"

type Props = {
  children?: any,
  style?: any,
  direction?: Direction,
  /** Qa id */
  qa?: string,
}
const ButtonGroup = (props: Props) => {
  const { children, style, direction = 'horizontal', qa } = props;
  const className = classNames('m-button-group', {
    'm-button-group--vertical': direction === 'vertical'
  })

  return (
    <div className={className} style={style} data-qa={qa}>
      {children}
    </div>
  )
}

export default ButtonGroup;
