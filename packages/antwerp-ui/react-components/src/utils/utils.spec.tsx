import { classNames, isScrollAtTheEnd } from './dom.utils';
import { renderHTMLLink } from './render.utils';

describe('Utils - DOM Utils', () => {
  describe('- classNames', () => {
    it('should return a className string', () => {
      expect(
        classNames({
          main: 5 < 10,
          'is-empty': true,
          test: false
        })
      ).toEqual('main is-empty');
    });
  });
  describe('- isScrollAtTheEnd', () => {
    it('should return true if the element is not scrollable', () => {
      expect(
        isScrollAtTheEnd({
          clientWidth: 20,
          scrollWidth: 20,
          scrollLeft: 0
        } as Element)
      ).toEqual(true);
    });
    it('should return false if the element is not at the end of the scroll', () => {
      expect(
        isScrollAtTheEnd({
          clientWidth: 10,
          scrollWidth: 20,
          scrollLeft: 2
        } as Element)
      ).toEqual(false);
    });
    it('should return true if the element is at the end of the scroll', () => {
      expect(
        isScrollAtTheEnd({
          clientWidth: 20,
          scrollWidth: 30,
          scrollLeft: 10
        } as Element)
      ).toEqual(true);
    });
  });
});

describe('Utils - Render utils', () => {
  describe('- renderLink', () => {
    it('should return an empty string if an empty object is provided', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(renderHTMLLink({})).toEqual('');
    });
    it('should return an empty string if an empty object is provided', () => {
      const link = renderHTMLLink({ label: 'Label', href: '/home' });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect((link || {}).props).toEqual({ children: 'Label', href: '/home', target: '_self' });
    });
  });
});
