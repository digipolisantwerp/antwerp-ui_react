import React, { Component } from 'react';
import classNames from 'classnames';

class Card extends Component {
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
      <div class={cardClass} style={style}>
        {children}
      </div>
    )
  }
}

export default Card;