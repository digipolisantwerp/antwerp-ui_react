import { Button } from '../../atoms/button';
import { HeaderProps } from './Header.types';

export function Header({ logoHref, logoAlt, buttons, logoSrc, skipToMainLabel, ariaLabel, qa }: HeaderProps) {
  return (
    <header className="o-header" aria-label={ariaLabel} data-qa={qa}>
      <div className="o-header__content-wrapper">
        <div className="o-header__content">
          <a href="#main" className="a-button a-button--text a-button--neutral o-header__button-skip">
            {skipToMainLabel}
          </a>
          <a href={logoHref} className="o-header__logo">
            <img src={logoSrc} alt={logoAlt} />
          </a>
        </div>
        <div className="o-header__menu-items">
          {(buttons || []).map((b) => (
            <Button {...b} key={b.id} transparent theme="neutral" className="o-header__button">
              {b.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  logoHref: '/',
  logoAlt: 'Naar de startpagina',
  logoSrc: 'https://a-ui.github.io/core_branding_scss/images/a-logo.svg',
  ariaLabel: 'Header',
  skipToMainLabel: 'Ga naar inhoud',
  buttons: []
};

export default Header;
