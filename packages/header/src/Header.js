import React from 'react';

const Header = ({children}) => {
  return (
    <header className="o-header">
      <a href="/" className="o-header__logo">
        <img src="https://a-ui.github.io/core_branding_scss/images/a-logo.svg" alt="Official logo Antwerpen" />
      </a>
      {children}
    </header>
  );
}

export default Header;