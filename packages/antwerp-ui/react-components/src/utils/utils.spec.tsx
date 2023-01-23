import { isScrollAtTheEnd } from './dom.utils';
import { renderHTMLLink } from './render.utils';

describe('Utils - DOM Utils - isScrollAtTheEnd', () => {
  it('should return true if the element is at the end of the scroll', () => {
    expect(
      isScrollAtTheEnd({
        clientWidth: 20,
        scrollWidth: 10,
        scrollLeft: 20
      } as Element)
    ).toEqual(true);
  });
});

describe('Utils - Render utils - renderLink', () => {
  it('should return an empty string if an empty object is provided', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(renderHTMLLink({})).toEqual('');
  });
});
