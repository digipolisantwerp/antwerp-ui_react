import { classNames } from '../../../../utils/dom.utils';
import { Icon } from '../../../base/icon';
import { SocialButtonProps } from '../Button.types';

export function SocialButton({ ariaLabel, type, href, negative, uniform, qa }: SocialButtonProps) {
  const socialMediaIcon = () => {
    if (type === 'linkedin') {
      return `professional-network-${type}`;
    }
    if (type === 'instagram') {
      return `social-${type}`;
    }
    return `social-media-${type}`;
  };
  const classes = classNames({
    'a-button': true,
    [`a-button--${type}`]: !!type && !uniform,
    'a-button--social': !!uniform,
    'a-button--negative': !!negative,
    'has-icon': true
  });
  return (
    <a href={href} className={classes} aria-label={ariaLabel} data-qa={qa}>
      <Icon name={socialMediaIcon()} />
    </a>
  );
}

SocialButton.defaultProps = {
  href: '/'
};

export default SocialButton;
