import React, { Component } from 'react';
import classNames from 'classnames';
import Link from '../../link/src/Link';
import Icon from '../../icon/src/Icon';

import './Pagination.scss';

type Props = {
  /** The current page */
  currentPage?: Number,
  /** The number of items per page */
  itemsPerPage: Number,
  /** The total amount of values */
  totalValues: Number,
  /** Callback when a page, next or previouse button is clicked. Passes the selected page. */
  onUpdate: Function,
  /**  m-pagination--large, m-pagination--small, m-pagination--outline or sensible combination of these. */
  styling?: string,
  /** Display as text or as numbers */
  display?: 'text' | 'numbers',
  /** ariaLabel for navigation component, default to 'Paginering'. */
  ariaLabel?: string,
  /** ariaLabel for next page, default to 'Volgende pagina'. */
  ariaLabelNextPage?: string,
  /** ariaLabel for previous page, default to 'Vorige pagina'. */
  ariaLabelPreviousPage?: string,
  /** ariaLabel for current page, default to 'Pagina'. */
  ariaLabelPage?: string,
  /** Qa id */
  qa?: string,
};

type State = {
  numbers: Array,
  currentPage: Number,
  totalPages: Number
};

export default class Pagination extends Component<Props, State> {
  static defaultProps = {
    currentPage: 1,
    styling: 'basic',
    display: 'numbers'
  };

  constructor(props) {
    super(props);
    this.state = this.setValues();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentPage !== this.props.currentPage ||
      prevProps.itemsPerPage !== this.props.itemsPerPage ||
      prevProps.totalValues !== this.props.totalValues
    ) {
      this.setState(this.setValues);
    }
  }

  onPrev = e => {
    e.preventDefault();
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.onChange(currentPage - 1);
    }
    return false;
  };

  onNext = e => {
    e.preventDefault();
    const { currentPage, totalPages } = this.state;
    if (currentPage < totalPages) {
      this.onChange(currentPage + 1);
    }
    return false;
  };

  onChange(i, e) {
    if (e) {
      e.preventDefault();
    }
    const { onUpdate } = this.props;
    const parsedValue = parseInt(i, 10); // input from numbers array is a string
    if (parsedValue && onUpdate) {
      onUpdate(parsedValue);
    }

    return false;
  }

  setValues() {
    const { totalValues, itemsPerPage, currentPage } = this.props;
    let _currentPage = 0;
    let _numbers = 0;
    let _totalPages = 0;

    if (totalValues && itemsPerPage) {
      _currentPage = Number(currentPage);

      _totalPages = Math.ceil(totalValues / itemsPerPage);

      const generateNumbers = Array(_totalPages)
        .fill('')
        .map((e, i) => String(i + 1));

      if (generateNumbers.length < 8) {
        return {
          numbers: generateNumbers,
          totalPages: _totalPages,
          currentPage: _currentPage
        };
      }

      if (_currentPage < 5) {
        _numbers = generateNumbers.slice(0, 5);
      } else if (_currentPage > _totalPages - 4) {
        _numbers = generateNumbers.slice(_totalPages - 5);
      } else {
        _numbers = generateNumbers.slice(_currentPage - 2, _currentPage + 1);
      }

      // First page
      if (_numbers.indexOf('1') === -1) {
        _numbers.unshift('1');
      }

      // Last Page
      if (_numbers.indexOf(String(_totalPages)) === -1) {
        _numbers.push(String(_totalPages));
      }

      // Add dots at the beginning
      if (_numbers.indexOf('2') === -1) {
        _numbers.splice(1, 0, '...');
      }

      // Add dots at the end
      if (_numbers.indexOf(String(_totalPages - 1)) === -1) {
        _numbers.splice(_numbers.length - 1, 0, '...');
      }
    }

    return {
      numbers: _numbers,
      totalPages: _totalPages,
      currentPage: _currentPage
    };
  }

  render() {
    const {
      styling,
      display,
      ariaLabel = 'Paginering',
      ariaLabelNextPage = 'Volgende pagina',
      ariaLabelPreviousPage = 'Vorige pagina',
      ariaLabelPage = 'Pagina',
      qa,
    } = this.props;
    // we render this, so it must be capitalized
    const { numbers, currentPage, totalPages } = this.state;

    const paginationClasses = classNames('m-pagination', styling);
    const previousDisabledClasses = classNames('pagination-button', 'pagination-prev-page', {
      'is-disabled': currentPage <= 1
    });
    const nextDisabledClasses = classNames('pagination-button', 'pagination-next-page', {
      'is-disabled': currentPage >= totalPages
    });

    if (totalPages < 1) {
      return null;
    }

    return (
      <nav role="navigation" aria-label={ariaLabel} data-qa={qa}>
        <ul className={paginationClasses}>
          <li className="m-pagination__prev pagination-button" key="pagination__prev">
            <Link
              className={previousDisabledClasses}
              href={currentPage > 1 ? '#' : null}
              onClick={(e) => this.onPrev(e)}
              aria-label={ariaLabelPreviousPage}
            >
              <Icon name="angle-left" ariaLabel={ariaLabelPreviousPage} />
            </Link>
          </li>
          {display === 'text' && (
            <li className="m-pagination__label" key="pagination__label">{`${currentPage} - ${totalPages}`}</li>
          )}
          {display === 'numbers' &&
            numbers.map((number, i) => {
              if (number === '...') {
                return (<li key={i}>...</li>);
              } else {
                return (<li key={i}>
                  <Link
                    className={classNames({ 'is-active': number === `${currentPage}` }, 'pagination-button', `pagination-button-${i}`)}
                    href={'#'}
                    onClick={(e) => this.onChange(number, e)}
                    aria-label={`${ariaLabelPage} ${number}`}
                    aria-current={number === `${currentPage}` ? 'page' : null}
                  >
                    {number}
                  </Link>
                </li>);
              }
            })}
          <li className="m-pagination__next pagination-button" key="pagination__next">
            <Link
              className={nextDisabledClasses}
              href={currentPage < totalPages ? '#' : null}
              onClick={(e) => this.onNext(e)}
              aria-label={ariaLabelNextPage}
            >
              <Icon name="angle-right" ariaLabel={ariaLabelNextPage} />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
