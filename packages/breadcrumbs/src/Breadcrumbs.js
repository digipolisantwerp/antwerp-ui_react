// @flow
import React from 'react';

import Link from '../../link/src/Link';

type Props = {
  items: Array<{
    name: string,
    target?: string
  }>,
  linkProps?: Function,
  /** Qa id */
  qa?: string,
};

class Breadcrumbs extends React.Component<Props> {
  static defaultProps = {
    linkProps: src => src,
  };

  renderItems() {
    const { items, linkProps } = this.props;

    return items.map((item, index) => (
      <li key={item.name}>
        {
          (index >= items.length - 1 || !item.target)
            ? item.name
            : (
              <Link {...linkProps({ href: item.target })}>
                {item.name}
              </Link>
            )
        }
      </li>
    ));
  }

  render() {
    const { items, qa } = this.props;

    return (
      items && items.length > 0 && (
        <ul className="m-breadcrumbs" data-qa={qa}>
            { this.renderItems() }
        </ul>)
    );
  }
}

export default Breadcrumbs;
