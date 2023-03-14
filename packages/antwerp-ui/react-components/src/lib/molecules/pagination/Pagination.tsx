/* eslint-disable jsx-a11y/anchor-is-valid */
import { PaginationProps } from './Pagination.types';
import { classNames } from '../../../utils/dom.utils';
import { Icon } from '../../base/icon';
import { MouseEvent, useEffect, useState } from 'react';
import { DEFAULT_SIZE, SIZE_MAP } from '../../../constants/layout.settings';
import { pagesArray } from '../../../utils/math.utils';

const renderTextPagination = (currentPage: number, totalPages: number, text: string, ariaLabelPage?: string) => (
  <li className="m-pagination__label" key="pagination__label">
    <span className="u-screen-reader-only">{ariaLabelPage} </span>
    {text.replace('%currentPage%', `${currentPage}`).replace('%totalPages%', `${totalPages}`)}
  </li>
);

const renderNumbersPagination = (
  current: number,
  total: number,
  ariaLabelPage?: string,
  onChange?: (page: number, e: MouseEvent) => void
) => {
  const pages = pagesArray(current, total);
  return pages.map((page: number, i: number) => {
    if (!page) {
      return <li key={i}>...</li>;
    } else {
      const pageClass = classNames({
        'is-active': page === current
      });
      return (
        <li key={i}>
          <a
            className={pageClass}
            href={'#'}
            onClick={(e) => onChange && onChange(page, e)}
            aria-label={`${ariaLabelPage} ${page}`}
            aria-current={page === current ? 'page' : undefined}
          >
            {page}
          </a>
        </li>
      );
    }
  });
};

export function Pagination({
  currentPage = 1,
  itemsPerPage,
  totalItems,
  onChange,
  display,
  size,
  ariaLabel,
  ariaLabelNextPage,
  ariaLabelPreviousPage,
  ariaLabelPage,
  text,
  qa
}: PaginationProps) {
  const [totalPages, setTotalPages] = useState<number>(0);

  const onPrev = (event: MouseEvent) => {
    event.preventDefault();
    if (currentPage > 1) {
      pageChange(currentPage - 1);
    }
  };

  const onNext = (event: MouseEvent) => {
    event.preventDefault();
    if (currentPage < totalPages) {
      pageChange(currentPage + 1);
    }
  };

  const pageChange = (i: number, event?: MouseEvent) => {
    event && event.preventDefault();
    return onChange && onChange(i);
  };

  const paginationClass = classNames({
    'm-pagination': true,
    [`m-pagination--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size
  });
  const paginationPreviousClass = classNames({ 'is-disabled': currentPage <= 1 });
  const paginationNextClass = classNames({ 'is-disabled': currentPage >= totalPages });

  useEffect(() => {
    if (totalItems && itemsPerPage) {
      const total = Math.ceil(Math.abs(totalItems) / Math.abs(itemsPerPage));
      setTotalPages(total);
    }
  }, [currentPage, itemsPerPage, totalItems]);

  return (
    <nav role="navigation" aria-label={ariaLabel} data-qa={qa}>
      <ul className={paginationClass} data-qa={qa}>
        <li className="m-pagination__prev" key={'pagination__prev'}>
          <a href={'#'} className={paginationPreviousClass} aria-label={ariaLabelPreviousPage} onClick={onPrev}>
            <Icon name="arrow-left-1" />
          </a>
        </li>
        {display === 'text' && renderTextPagination(currentPage, totalPages, text, ariaLabelPage)}
        {display === 'numbers' && renderNumbersPagination(currentPage, totalPages, ariaLabelPage, pageChange)}
        <li className="m-pagination__next" key="pagination__next">
          <a href={'#'} className={paginationNextClass} aria-label={ariaLabelNextPage} onClick={onNext}>
            <Icon name="arrow-right-1" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

Pagination.defaultProps = {
  currentPage: 1,
  ariaLabel: 'Paginering',
  ariaLabelNextPage: 'Volgende pagina',
  ariaLabelPreviousPage: 'Vorige pagina',
  ariaLabelPage: 'Pagina',
  text: '%currentPage% van de %totalPages%',
  display: 'numbers'
};

export default Pagination;
