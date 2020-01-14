// @flow
import * as React from 'react'

type Props = {
  component?: string | Function,
};

const Link = ({ component, children, ...props }: Props) => React.createElement(component, props, children);

Link.defaultProps = { component: 'a' };

export default Link;
