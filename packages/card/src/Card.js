import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
  style?: object,
  children?: any,
  /** Qa id */
  qa?: string,
};

class Card extends Component<Props> {
  render() {
    const {
      className,
      style,
      children,
      qa
    } = this.props;

    const cardClass = classNames(
      'm-card',
      className
    );

    return (
      <div className={cardClass} style={style} data-qa={qa}>
        {children}
      </div>
    )
  }
}

export default Card;