// @flow
import React from 'react';
import classNames from 'classnames';
import Link from '../../link';

type Props = {
  align?: "left" | "right" | "center",
  items: Array<{
    name: string,
    target: string,
    active?: boolean,
    disabled?: boolean,
  }>,
  linkProps?: Function,
  /** Qa id */
  qa?: string,
};

class Tabs extends React.Component<Props> {
  static defaultProps = {
    align: 'left',
    linkProps: src => src,
  };

  renderItems() {
    const { items, linkProps } = this.props;

    return items.map(item => (
      <li key={item.name}>
        {
          <Link
            className={classNames({ 'is-active': item.active, 'is-disabled': item.disabled })}
            {...linkProps({ href: item.target })}
          >
            {item.name}
          </Link>
        }
      </li>
    ));
  }

  render() {
    const { align, items, qa } = this.props;

    const tabClasses = classNames('m-nav-tabs', {
      'm-nav-tabs--left': align === 'left',
      'm-nav-tabs--right': align === 'right',
    });

    return (
      items && items.length > 0 && (
        <ul className={tabClasses} data-qa={qa}>
          { this.renderItems() }
        </ul>
      )
    );
  }
}

export default Tabs;
