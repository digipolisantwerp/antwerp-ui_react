import jest from 'jest-mock';
import { Pagination } from './Pagination';
import { fireEvent, render } from '@testing-library/react';

describe('UI Components - Molecules - Pagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pagination itemsPerPage={5} totalItems={50} />);
    expect(baseElement).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-pagination__prev')).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-pagination__next')).toBeTruthy();
  });

  it('should render text pagination', () => {
    const { baseElement } = render(
      <Pagination
        currentPage={3}
        itemsPerPage={5}
        totalItems={10}
        onChange={() => console.log('PAGE CHANGE')}
        display="text"
      />
    );
    expect(baseElement.getElementsByClassName('m-pagination__prev')).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-pagination__next')).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-pagination__label')).toBeTruthy();
  });

  it('should render numbers pagination', () => {
    const { baseElement } = render(
      <Pagination
        currentPage={5}
        itemsPerPage={5}
        totalItems={50}
        onChange={() => console.log('PAGE CHANGE')}
        display="numbers"
      />
    );
    expect(baseElement.getElementsByClassName('m-pagination__prev')).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-pagination__next')).toBeTruthy();
    expect(baseElement.getElementsByTagName('a').length).toEqual(7);
  });

  it('should render disabled next arrow', () => {
    const { baseElement } = render(<Pagination currentPage={7} itemsPerPage={5} totalItems={50} display="numbers" />);
    expect(baseElement.getElementsByClassName('m-pagination__prev')).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-pagination__next')).toBeTruthy();
    expect(baseElement.getElementsByClassName('is-disabled')).toBeTruthy();
  });

  it('should render disabled previous arrow', () => {
    const { baseElement } = render(<Pagination currentPage={1} itemsPerPage={5} totalItems={50} />);
    expect(baseElement.getElementsByClassName('m-pagination__prev')).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-pagination__next')).toBeTruthy();
    expect(baseElement.getElementsByClassName('is-disabled')).toBeTruthy();
  });

  it('should trigger the onChange function when a number is clicked.', () => {
    const onChangeMock = jest.fn();
    const { baseElement } = render(
      <Pagination currentPage={2} itemsPerPage={5} totalItems={50} onChange={onChangeMock} display="numbers" />
    );
    const pageNumber = baseElement.getElementsByTagName('a')[3];
    fireEvent.click(pageNumber);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('should trigger the onChange function when a the previous button is clicked.', () => {
    const onChangeMock = jest.fn();
    const { baseElement } = render(
      <Pagination currentPage={2} itemsPerPage={5} totalItems={50} onChange={onChangeMock} display="numbers" />
    );

    const pagePrev = baseElement.getElementsByClassName('ai-arrow-left-1')[0]?.parentElement;
    pagePrev && fireEvent.click(pagePrev);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('should trigger the onChange function when the next button is clicked.', () => {
    const onChangeMock = jest.fn();
    const { baseElement } = render(
      <Pagination currentPage={2} itemsPerPage={5} totalItems={50} onChange={onChangeMock} display="numbers" />
    );
    const pageNext = baseElement.getElementsByClassName('ai-arrow-right-1')[0]?.parentElement;
    pageNext && fireEvent.click(pageNext);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
