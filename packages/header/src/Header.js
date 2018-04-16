import React from 'react';
import classNames from 'classnames';

const Header = ({ children, style = {}, className = '' }) => {
  const headerClass = classNames('o-header', className);
  return (
    <header className={headerClass}>
      <a href="/" className="o-header__logo">
        <img src="https://a-ui.github.io/core_branding_scss/images/a-logo.svg" alt="Official logo Antwerpen" />
      </a>
      {children}
    </header>
  );
}

export default Header;