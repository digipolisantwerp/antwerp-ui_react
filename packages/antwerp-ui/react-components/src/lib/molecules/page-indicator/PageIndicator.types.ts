export interface PageIndicatorPage {
  id: string;
  ariaControls?: string;
  ariaLabel?: string;
}

export interface PageIndicatorProps {
  activePage: string;
  pages: PageIndicatorPage[];
  size?: 'large' | 'small';
  onPageChange: (pageId: string) => void;
  qa?: string;
}
