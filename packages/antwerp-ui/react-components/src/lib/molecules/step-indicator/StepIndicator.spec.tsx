import jest from 'jest-mock';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StepIndicator } from './StepIndicator';

describe('UI Components - Molecules - Pagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StepIndicator />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the steps', () => {
    const { getByText } = render(
      <StepIndicator
        steps={[
          { id: 'step1', label: 'First' },
          { id: 'step2', label: 'Second' }
        ]}
      />
    );
    expect(getByText('First')).toBeTruthy();
    expect(getByText('Second')).toBeTruthy();
  });

  it('should render links in steps', () => {
    const { getByRole } = render(<StepIndicator steps={[{ id: 'step1', label: 'First', link: { href: '#' } }]} />);
    expect(getByRole('link')).toBeTruthy();
  });

  it('should render complete steps', () => {
    const { container } = render(<StepIndicator steps={[{ id: 'step1', label: 'First', complete: true }]} />);
    expect(container.getElementsByClassName('u-screen-reader-only')[1].innerHTML).toEqual(' (voltooid)');
  });

  it('should call onStepClick', () => {
    const mockClick = jest.fn();
    const { getByRole } = render(
      <StepIndicator onStepClick={mockClick} steps={[{ id: 'step1', link: { href: '#' } }]} />
    );
    fireEvent.click(getByRole('link'));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
