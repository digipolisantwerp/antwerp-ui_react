export interface BadgeProps {
  ariaLabel?: string;
  qa?: string;
  type?: 'outlined' | 'transparent';
  theme?: 'primary' | 'neutral';
  children: string;
}
