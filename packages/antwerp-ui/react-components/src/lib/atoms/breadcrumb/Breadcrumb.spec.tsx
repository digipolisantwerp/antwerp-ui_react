import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Breadcrumb } from './Breadcrumb';

describe('UI Components - Atoms - Breadcrumb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Breadcrumb />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with wrong input', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { baseElement } = render(<Breadcrumb items={''} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the correct class', () => {
    const { baseElement } = render(<Breadcrumb />);
    expect(baseElement.getElementsByClassName('a-breadcrumb').length).toBe(1);
  });

  it('should render the items', () => {
    const { baseElement } = render(
      <Breadcrumb
        items={[
          { label: 'Hello', href: 'link-1' },
          { label: 'World', href: 'link-2' },
          { label: '', href: 'hello' },
          { label: 'last' }
        ]}
      />
    );
    expect(baseElement.getElementsByTagName('li').length).toBe(4);
    expect(baseElement.getElementsByTagName('a').length).toBe(3);
  });

  it('should render the title', () => {
    const { baseElement } = render(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <Breadcrumb items={[{ label: 'Hello', href: 'link-1' }, { href: '/hello' }]} title={{ label: 'TitleTest' }} />
    );
    expect(baseElement.getElementsByTagName('h1').length).toBe(1);
    expect(baseElement.getElementsByTagName('h1')[0].innerHTML).toEqual('TitleTest');
  });

  it('should allow to override the link rendering', () => {
    const { baseElement } = render(
      <Breadcrumb
        items={[
          { label: 'Hello', href: 'link-1' },
          { label: 'Hello too', href: 'link-2' }
        ]}
        renderLinkFunction={() => <span>CUSTOMLINK</span>}
      />
    );
    expect(baseElement.getElementsByTagName('span').length).toBe(2);
    expect(baseElement.getElementsByTagName('span')[0].innerHTML).toEqual('CUSTOMLINK');
  });
  it('should not render a title if none is provided', () => {
    const { baseElement } = render(
      <Breadcrumb
        items={[
          { label: 'Hello', href: 'link-1' },
          { label: 'Goodbye', href: '/goodbye' }
        ]}
      />
    );
    expect(baseElement.getElementsByClassName('h1').length).toBe(0);
  });
});
