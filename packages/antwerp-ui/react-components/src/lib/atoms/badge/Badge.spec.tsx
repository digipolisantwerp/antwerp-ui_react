import '@testing-library/jest-dom';
import { Badge } from './Badge';
import { render, screen } from '@testing-library/react';

describe('UI Components - Atoms - Badge', () => {
  it('should render successfully', () => {
    render(<Badge>24</Badge>);
    expect(screen.getByText('24')).toBeInTheDocument();
  });

  it('should apply the theme class', () => {
    render(<Badge theme="primary">24</Badge>);
    const badge = screen.getByText('24');
    expect(badge.classList.contains('a-badge--primary')).toBe(true);
  });

  it('should apply the emphasis class', () => {
    render(<Badge emphasis="low">24</Badge>);
    const badge = screen.getByText('24');
    expect(badge.classList.contains('a-badge--transparent')).toBe(true);
  });

  it('should apply both the theme and emphasis classes', () => {
    render(
      <Badge theme="primary" emphasis="medium">
        24
      </Badge>
    );
    const badge = screen.getByText('24');
    expect(badge.classList.contains('a-badge--primary')).toBe(true);
    expect(badge.classList.contains('a-badge--outlined')).toBe(true);
  });

  it('should NOT apply the theme and type classes if none are provided', () => {
    render(<Badge>24</Badge>);
    const badge = screen.getByText('24');
    expect(badge.classList.contains('a-badge--primary')).toBe(false);
    expect(badge.classList.contains('a-badge--outlined')).toBe(false);
  });

  it('should NOT render children that cannot be parsed to a number', () => {
    const { baseElement } = render(<Badge>Hello</Badge>);
    expect(baseElement.innerHTML).toEqual('<div><span class="a-badge"></span></div>');
  });
});
