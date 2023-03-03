import { render } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgressBar percentage={10} label="Example" />);
    expect(baseElement).toBeTruthy();
  });

  it('should show label if provided in props', () => {
    const { baseElement } = render(<ProgressBar percentage={10} label="Example" />);
    expect(baseElement.getElementsByClassName('a-progress__label').length).toBe(1);
  });

  it('should have large class if size is large', () => {
    const { baseElement } = render(<ProgressBar large percentage={10} label="Example" />);
    expect(baseElement.getElementsByClassName('a-progress--l').length).toBe(1);
  });

  it('should override the aria-values', () => {
    const { container } = render(<ProgressBar label="" percentage={0} ariaValueNow={4} minValue={1} maxValue={10} />);
    const progressBar = container.innerHTML;
    expect(progressBar).toContain('aria-valuenow="4"');
    expect(progressBar).toContain('aria-valuemin="1"');
    expect(progressBar).toContain('aria-valuemax="10"');
  });
});
