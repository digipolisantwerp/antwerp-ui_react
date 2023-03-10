import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Label } from './Label';

describe('Label', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Label>Test</Label>);
    expect(baseElement).toBeTruthy();
  });

  it('should apply the correct class for theme - primary', () => {
    const { baseElement } = render(<Label type="primary">Test</Label>);
    expect(baseElement.getElementsByClassName('a-label--primary').length).toBe(1);
  });

  it('should apply the correct class for theme - success', () => {
    const { baseElement } = render(<Label type="success">Test</Label>);
    expect(baseElement.getElementsByClassName('a-label--success').length).toBe(1);
  });

  it('should apply the correct class for theme - warning', () => {
    const { baseElement } = render(<Label type="warning">Test</Label>);
    expect(baseElement.getElementsByClassName('a-label--warning').length).toBe(1);
  });

  it('should apply the correct class for theme - danger', () => {
    const { baseElement } = render(<Label type="danger">Test</Label>);
    expect(baseElement.getElementsByClassName('a-label--danger').length).toBe(1);
  });

  it('should insert the children', () => {
    const { baseElement } = render(<Label>Test</Label>);
    expect(baseElement).toHaveTextContent('Test');
  });
});
