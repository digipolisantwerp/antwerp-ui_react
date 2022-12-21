export const DEFAULT_AVATAR_ICON = 'single-neutral';

export interface AvatarProps {
  icon?: string;
  letter?: string;
  image?: string;
  imageAlt: string;
  rounded?: boolean;
  size?: 'small' | 'medium' | 'large';
  ariaLabel: string;
  qa?: string;
}
