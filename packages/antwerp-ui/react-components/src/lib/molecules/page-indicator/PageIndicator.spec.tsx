import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

import { act } from 'react-dom/test-utils';
import { PageIndicator } from './PageIndicator';

describe('PageIndicator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <PageIndicator onPageChange={() => {}} activePage="page1" pages={[{ id: 'page-1' }, { id: 'page-2' }]} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should handle a right arrow click correctly', () => {
    let activePage = 'page-1';
    const { baseElement } = render(
      <PageIndicator
        onPageChange={(page) => {
          activePage = page;
        }}
        activePage={activePage}
        pages={[{ id: 'page-1' }, { id: 'page-2' }, { id: 'page-3' }]}
      />
    );
    const firstIndicatorBtn = baseElement.getElementsByClassName('a-page-indicator__item')[0] as HTMLButtonElement;
    firstIndicatorBtn.focus();
    expect(firstIndicatorBtn).toHaveFocus();
    const indicatorContainer = baseElement.getElementsByClassName('a-page-indicator')[0];
    act(() => fireEvent.keyDown(indicatorContainer, { key: 'ArrowRight' }));
    const secondIndicatorBtn = baseElement.getElementsByClassName('a-page-indicator__item')[1] as HTMLButtonElement;
    expect(secondIndicatorBtn).toHaveFocus();
    act(() => fireEvent.keyDown(indicatorContainer, { key: 'ArrowRight' }));
    const thirdIndicatorBtn = baseElement.getElementsByClassName('a-page-indicator__item')[2] as HTMLButtonElement;
    expect(thirdIndicatorBtn).toHaveFocus();
    act(() => fireEvent.keyDown(indicatorContainer, { key: 'ArrowRight' }));
    expect(firstIndicatorBtn).toHaveFocus();
  });

  it('should handle a left arrow click correctly', () => {
    let activePage = 'page-1';
    const { baseElement } = render(
      <PageIndicator
        onPageChange={(page) => {
          activePage = page;
        }}
        activePage={activePage}
        pages={[{ id: 'page-1' }, { id: 'page-2' }, { id: 'page-3' }]}
      />
    );
    const firstIndicatorBtn = baseElement.getElementsByClassName('a-page-indicator__item')[0] as HTMLButtonElement;
    firstIndicatorBtn.focus();
    expect(firstIndicatorBtn).toHaveFocus();
    const indicatorContainer = baseElement.getElementsByClassName('a-page-indicator')[0];
    act(() => fireEvent.keyDown(indicatorContainer, { key: 'ArrowLeft' }));
    const thirdIndicatorBtn = baseElement.getElementsByClassName('a-page-indicator__item')[2] as HTMLButtonElement;
    expect(thirdIndicatorBtn).toHaveFocus();
    act(() => fireEvent.keyDown(indicatorContainer, { key: 'ArrowLeft' }));
    const secondIndicatorBtn = baseElement.getElementsByClassName('a-page-indicator__item')[1] as HTMLButtonElement;
    expect(secondIndicatorBtn).toHaveFocus();
    act(() => fireEvent.keyDown(indicatorContainer, { key: 'ArrowLeft' }));
    expect(firstIndicatorBtn).toHaveFocus();
  });

  it('should handle a right and left arrow click with wrong input', () => {
    let activePage = 'page-0';
    const { baseElement } = render(
      <PageIndicator
        onPageChange={(page) => {
          activePage = page;
        }}
        activePage={activePage}
        pages={[{ id: 'page-1' }, { id: 'page-2' }, { id: 'page-3' }]}
      />
    );
    const firstIndicatorBtn = baseElement.getElementsByClassName('a-page-indicator__item')[0] as HTMLButtonElement;
    firstIndicatorBtn.focus();
    expect(firstIndicatorBtn).toHaveFocus();
    const indicatorContainer = baseElement.getElementsByClassName('a-page-indicator')[0];
    act(() => fireEvent.keyDown(indicatorContainer, { key: 'ArrowRight' }));
    act(() => fireEvent.keyDown(indicatorContainer, { key: 'ArrowLeft' }));
  });
});
