export interface NavigationListProps {
  direction?: 'vertical' | 'horizontal';
  ariaLabel?: string;
  border?: boolean;
  items: NavigationListItemProps[];
  onItemClick?: (id: string, index: number) => void;
  qa?: string;
}

export interface NavigationListItemProps {
  id: string;
  label: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
}
