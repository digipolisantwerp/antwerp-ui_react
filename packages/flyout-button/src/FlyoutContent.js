
import React from 'react';
import classNames from 'classnames';
type Props = {
  hasPadding?: boolean,
  children?: any,
  /** Qa id */
  qa?: string,
}

export const FlyoutContent = (props: Props) => {
  const { hasPadding, children, qa } = props;
  const classes = classNames('m-flyout__content', {
    'has-padding': !!hasPadding
  });

  return (
    <div className={classes} data-qa={qa}>
      {children}
    </div>
  );
}

export default FlyoutContent;
