export interface PaginationProps {
  currentPage?: number;
  itemsPerPage?: number;
  totalItems?: number;

  onChange?: (page: number) => void;
  display?: 'text' | 'numbers';
  size?: 'small' | 'medium';

  ariaLabel?: string;
  ariaLabelPreviousPage?: string;
  ariaLabelNextPage?: string;
  ariaLabelPage?: string;

  text?: string;

  qa?: string;
}
