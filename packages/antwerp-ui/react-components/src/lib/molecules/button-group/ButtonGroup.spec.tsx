import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonGroup } from './ButtonGroup';

describe('UI Components - Molecules - ButtonGroup', () => {
  it('should wrap the children in a buttongroup', () => {
    const { baseElement } = render(
      <ButtonGroup>
        <span>test</span>
      </ButtonGroup>
    );
    expect(baseElement.getElementsByClassName('m-button-group').length).toBe(1);
  });

  it('should can be rendered vertically', () => {
    const { baseElement } = render(
      <ButtonGroup vertical>
        <span>test</span>
      </ButtonGroup>
    );
    expect(baseElement.getElementsByClassName('m-button-group--vertical').length).toBe(1);
  });
});
