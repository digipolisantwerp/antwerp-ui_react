import React from 'react';
import Button from '.././../../Button';

function redirect(url) {
  window.location.href = url;
}

const ButtonBlock = ({
  title = '',
  url = '',
  buttonTitle = '',
  icon = '',
  children
}) => {
  return (
    <div className="u-margin-bottom">
      <h5 className="u-margin-top-xs u-margin-bottom">{title}</h5>
      <Button type="primary" title={buttonTitle} onClick={() => redirect(url)} iconLeft={icon}>{children}</Button>
    </div>
  );
};

export default ButtonBlock;
