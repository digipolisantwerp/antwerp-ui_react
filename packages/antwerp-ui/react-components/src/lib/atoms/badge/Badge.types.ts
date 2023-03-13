export interface BadgeProps {
  ariaLabel?: string;
  qa?: string;
  emphasis?: 'high' | 'medium' | 'low';
  theme?: 'primary' | 'neutral';
  children: string;
}
