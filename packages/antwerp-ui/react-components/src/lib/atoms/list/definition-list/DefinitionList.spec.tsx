import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DefinitionList } from '../index';

describe('UI Components - Atoms - DefinitionList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefinitionList />);
    expect(baseElement).toBeTruthy();
  });

  it('should render right class', () => {
    const { baseElement } = render(<DefinitionList />);
    expect(baseElement.getElementsByClassName('a-definition-list')[0]).toBeTruthy();
  });

  it('should render items', () => {
    const { baseElement } = render(<DefinitionList items={[{ term: 'Hello', description: 'World' }]} />);
    expect(baseElement.getElementsByTagName('dt')[0]).toBeTruthy();
    expect(baseElement.getElementsByTagName('dd')[0]).toBeTruthy();
  });
});
