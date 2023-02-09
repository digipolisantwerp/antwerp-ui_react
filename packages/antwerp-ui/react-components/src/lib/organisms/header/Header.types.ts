import { ButtonProps } from '../../atoms/button';

export interface HeaderProps {
  logoHref?: string;
  logoSrc?: string;
  logoAlt?: string;
  skipToMainLabel?: string;
  ariaLabel?: string;
  buttons?: (ButtonProps & { label?: string })[];
  qa?: string;
}
