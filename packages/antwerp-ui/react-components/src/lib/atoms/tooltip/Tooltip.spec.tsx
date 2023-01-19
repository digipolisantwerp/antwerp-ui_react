import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Tooltip } from './Tooltip';

describe('UI Components - Atoms - Tooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tooltip anchorId="tooltip-1" text="Some tip" anchor={<span>Anchor</span>} />);
    expect(baseElement).toBeTruthy();
    expect(baseElement.getElementsByClassName('a-tooltip__base').length).toBe(1);
    expect(baseElement.getElementsByClassName('a-tooltip__base')[0].firstChild).toHaveClass('a-tooltip');
    expect(baseElement.getElementsByTagName('span').length).toEqual(1);
  });
});
