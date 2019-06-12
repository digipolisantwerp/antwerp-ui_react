// @flow
import React from 'react';
import classNames from 'classnames';

type Direction = "horizontal" | "vertical"

type Props = {
  children?: any,
  style?: any,
  direction?: Direction
}
const ButtonGroup = (props: Props) => {
  const { children, style, direction = 'horizontal' } = props;
  console.log('direction', direction);
  const className = classNames('m-button-group', {
    'm-button-group--vertical': direction === 'vertical'
  })

  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

export default ButtonGroup;