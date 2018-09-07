// @flow
import { createElement as create } from 'react';

type Props = {
  component?: string | Function,
};

const Link = ({ component, children, ...props }: Props) => create(component, props, children);

Link.defaultProps = { component: 'a' };

export default Link;
