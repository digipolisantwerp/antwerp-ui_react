import React from 'react';
import classNames from 'classnames';

type Props = {
  children?: any,
  style?: object,
  className?: string,
};

const Header = (props: Props) => {
  const { children, style, className } = props;
  const headerClass = classNames('o-header', className);
  return (
    <header className={headerClass} style={style}>
      <a href="/" className="o-header__logo">
        <img src="https://a-ui.github.io/core_branding_scss/images/a-logo.svg" alt="Official logo Antwerpen" />
      </a>
      {children}
    </header>
  );
}

export default Header;