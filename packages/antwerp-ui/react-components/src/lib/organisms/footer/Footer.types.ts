import { Link } from '../../../constants/application.types';

export interface FooterProps {
  backToTop?: boolean;
  backToTopAriaLabel?: string;
  items?: Link[];
  qa?: string;
}
