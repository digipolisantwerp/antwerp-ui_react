import { render } from '@testing-library/react';

import Avatar from './Avatar';

describe('UI Components - Atoms - Avatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Avatar />);
    expect(baseElement).toBeTruthy();
  });
});
