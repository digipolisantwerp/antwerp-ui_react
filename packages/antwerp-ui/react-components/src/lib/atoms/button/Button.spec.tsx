import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('UI Components - Atoms - Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });

  it('should add the title if provided', () => {
    render(<Button title="test" />);
    expect(screen.getByTitle('test')).toBeTruthy();
  });

  it('should set the data-qa attribute', () => {
    const { baseElement } = render(<Button qa="id-1234" />);
    expect(baseElement.querySelector('button')?.getAttribute('data-qa') === 'id-1234').toBeTruthy();
  });

  it('should add the outline class', () => {
    const { baseElement } = render(<Button outline={true} />);
    expect(baseElement.getElementsByClassName('a-button--outlined').length).toBe(1);
  });

  it('should add the transparent class', () => {
    const { baseElement } = render(<Button transparent={true} />);
    expect(baseElement.getElementsByClassName('a-button--text').length).toBe(1);
  });

  it('should add the correct button size', () => {
    const { baseElement } = render(<Button size="small" />);
    expect(baseElement.getElementsByClassName('a-button--s').length).toBe(1);
  });

  it('should support icon buttons', () => {
    const { baseElement } = render(<Button icon="ai-test-icon" />);
    expect(baseElement.getElementsByClassName('has-icon').length).toBe(1);
    expect(baseElement.getElementsByClassName('ai-test-icon').length).toBe(1);
  });

  it('should support icon left buttons', () => {
    const { baseElement } = render(<Button iconLeft="ai-test-icon" />);
    expect(baseElement.getElementsByClassName('has-icon-left').length).toBe(1);
    expect(baseElement.getElementsByClassName('ai-test-icon').length).toBe(1);
  });

  it('should support icon right buttons', () => {
    const { baseElement } = render(<Button iconRight="ai-test-icon" />);
    expect(baseElement.getElementsByClassName('has-icon-right').length).toBe(1);
    expect(baseElement.getElementsByClassName('ai-test-icon').length).toBe(1);
  });

  it('should support spinner buttons', () => {
    const { baseElement } = render(<Button spinner={true} />);
    expect(baseElement.getElementsByClassName('has-icon-right').length).toBe(1);
    expect(baseElement.getElementsByClassName('a-spinner').length).toBe(1);
  });

  it('should use an extra-small spinner if the button is small', () => {
    const { baseElement } = render(<Button spinner={true} size="small" />);
    expect(baseElement.getElementsByClassName('a-spinner--xs').length).toBe(1);
  });

  it('should support avatar buttons', () => {
    const { baseElement } = render(<Button avatar={{ imageAlt: '', ariaLabel: '', qa: '' }} />);
    expect(baseElement.getElementsByClassName('has-avatar').length).toBe(1);
  });

  it('should support image avatar buttons', () => {
    const { baseElement } = render(
      <Button avatar={{ image: 'https://placedog.net/500/500', imageAlt: '', ariaLabel: '', qa: '' }} />
    );
    expect(baseElement.getElementsByClassName('has-avatar-with-inset').length).toBe(1);
  });

  it('should support text avatar buttons', () => {
    const { baseElement } = render(<Button avatar={{ letter: 'tt', imageAlt: '', ariaLabel: '', qa: '' }} />);
    expect(baseElement.getElementsByClassName('has-avatar-with-inset').length).toBe(1);
  });

  it('should support themed buttons', () => {
    const { baseElement } = render(<Button theme="warning" />);
    expect(baseElement.getElementsByClassName('a-button--warning').length).toBe(1);
  });

  it('should prohibit the use of the neutral theme in high emphasis buttons', () => {
    const { baseElement } = render(<Button theme="neutral" />);
    expect(baseElement.getElementsByClassName('a-button--neutral').length).toBe(0);
  });
});
