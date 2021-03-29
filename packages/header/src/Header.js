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
  /** Qa id */
  qa?: string,
};

const Header = (props: Props) => {
  const {
    children,
    style,
    className,
    logoUrl,
    logoSrc,
    logoAlt,
    type,
    qa,
  } = props;
  const env = Environment.getEnvironment();

  const headerClass = classNames(
    'o-header',
    className,
    {
      [`${env}-header`]: type === 'antwerpen'
    }
  );
  return (
    <header className={headerClass} style={style} data-qa={qa}>
      <a href={logoUrl} className="o-header__logo">
        <img src={logoSrc} alt={logoAlt} />
      </a>
      {children}
    </header>
  );
};

Header.defaultProps = {
  logoUrl: '/',
  logoSrc: 'https://cdn.antwerpen.be/core_branding_scss/5.0.0-beta.5/assets/images/a-logo.svg',
  logoAlt: 'Ga naar homepage.'
};

export default Header;
