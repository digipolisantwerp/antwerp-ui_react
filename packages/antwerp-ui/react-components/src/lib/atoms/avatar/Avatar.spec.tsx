import { Avatar } from './Avatar';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('UI Components - Atoms - Avatar', () => {
  it('should be a functional component', () => {
    expect(Avatar({ imageAlt: '', ariaLabel: '' })).toBeTruthy();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Avatar />);
    expect(baseElement).toBeTruthy();
  });

  it('should render an icon avatar by default', () => {
    const { container } = render(<Avatar />);
    expect(container.querySelector('svg')).toBeTruthy();
    expect(container.querySelector('use')?.getAttribute('href') === '#ai-single-neutral').toBeTruthy();
  });

  it('should contain an image with a default alt text', () => {
    const { getByAltText } = render(<Avatar image="image-url" />);
    expect(getByAltText('Avatar afbeelding').getAttribute('src')).toEqual('image-url');
  });

  it('should contain letters', () => {
    render(<Avatar letter="AC" />);
    expect(screen.getByText('AC'));
  });

  it('should render with size class', () => {
    const { baseElement } = render(<Avatar size="small" />);
    expect(baseElement.getElementsByClassName('a-avatar--s').length).toBe(1);
  });

  it('should render with rounded class', () => {
    const { baseElement } = render(<Avatar rounded />);
    expect(baseElement.getElementsByClassName('a-avatar--rounded').length).toBe(1);
  });

  it('should render with default aria-label', () => {
    render(<Avatar />);
    expect(screen.getByLabelText('Gebruiker icoon'));
  });

  it('should render with new aria-label', () => {
    render(<Avatar ariaLabel="Gebruiker avatar" />);
    expect(screen.getByLabelText('Gebruiker avatar'));
  });

  it('should render with image, rounded class, size class, and default aria-label, but not with letter', () => {
    const { baseElement, getByAltText } = render(
      <Avatar image="image-url" imageAlt="image" size="large" letter="AC" rounded qa="testing" />
    );
    expect(getByAltText('image').getAttribute('src')).toEqual('image-url');
    expect(baseElement).toBeTruthy();
    expect(baseElement.getElementsByClassName('a-avatar--rounded').length).toBe(1);
    expect(baseElement.getElementsByClassName('a-avatar--l').length).toBe(1);
    expect(screen.queryByText('AC')).not.toBeInTheDocument();
  });
});
