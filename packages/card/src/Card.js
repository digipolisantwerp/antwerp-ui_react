import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
  style?: object,
  children?: any,
};

class Card extends Component<Props> {
  render() {
    const {
      className,
      style,
      children
    } = this.props;

    const cardClass = classNames(
      'm-card',
      className
    );

    return (
      <div className={cardClass} style={style}>
        {children}
      </div>
    )
  }
}

export default Card;