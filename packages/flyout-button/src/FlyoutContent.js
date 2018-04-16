
import React from 'react';

export const FlyoutContent = ({ hasPadding = false, children }) => {
  const classes = classNames('m-flyout__content', {
    'has-padding': !!hasPadding
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
}