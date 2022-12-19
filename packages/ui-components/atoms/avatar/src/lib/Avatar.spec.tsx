import { render } from '@testing-library/react';

import UiComponentsAtomsAvatar from './Avatar';

describe('UiComponentsAtomsAvatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiComponentsAtomsAvatar />);
    expect(baseElement).toBeTruthy();
  });
});
