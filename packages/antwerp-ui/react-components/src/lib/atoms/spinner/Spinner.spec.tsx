import { render, screen } from '@testing-library/react';

import Spinner from './Spinner';

describe('UI Components - Atoms - Spinner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Spinner />);
    expect(baseElement).toBeTruthy();
  });
  it('should render with small size class', () => {
    const { baseElement } = render(<Spinner size="small" />);
    expect(baseElement.getElementsByClassName('a-spinner--s').length).toBe(1);
  });
  it('should have visible text', () => {
    render(<Spinner showText label="Loading..." />);
    expect(screen.getByText('Loading...'));
  });
  it('should have an invisible label', () => {
    render(<Spinner />);
    expect(screen.getByText('Wordt geladen...'));
  });
  it('should have a vertical class', () => {
    const { baseElement } = render(<Spinner vertical />);
    expect(baseElement.getElementsByClassName('a-spinner--vertical').length).toBe(1);
  });
});
