import React from 'react';
import classNames from 'classnames';

import {Environment} from '../../environment';
import './Header.scss';

type Props = {
  children?: any,
  style?: object,
  className?: string,
  /** Show environment colors when type is equal to antwerpen */
  type?: string,
  /** Logo URL to redirect to */
  logoUrl: string,
  /** Url of the logo img */
  logoSrc: string,
  /** Alt of the logo img */
  logoAlt: string,
};

const Header = (props: Props) => {
  const {
    children,
    style,
    className,
    logoUrl,
    logoSrc,
    logoAlt,
    type } = props;
  const env = Environment.getEnvironment();

  const headerClass = classNames(
    'o-header',
    className,
    {
      [`${env}-header`]: type === 'antwerpen'
    }
  );
  return (
    <header className={headerClass} style={style}>
      <a href={logoUrl} className="o-header__logo">
        <img src={logoSrc} alt={logoAlt} />
      </a>
      {children}
    </header>
  );
};

Header.defaultProps = {
  logoUrl: '/',
  logoSrc: 'https://cdn.antwerpen.be/core_branding_scss/3.1.0/assets/images/a-logo.svg',
  logoAlt: 'Klik op de A om terug naar de startpagina van antwerpen.be te gaan.'
};

export default Header;
