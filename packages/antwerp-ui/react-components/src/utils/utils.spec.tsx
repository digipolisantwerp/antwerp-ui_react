import { classNames, isScrollAtTheEnd } from './dom.utils';
import { renderHTMLLink } from './render.utils';
import { getPosition, getValueFromPosition, pagesArray } from './math.utils';

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
      expect((link || {}).props).toEqual({ children: ['Label', null], href: '/home', target: '_self' });
    });

    it('should add an icon', () => {
      const link = renderHTMLLink({ label: 'Label', href: '/home' }, 'arrow-left');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect((link || {}).props.children[1].props).toEqual({
        name: 'arrow-left'
      });
    });
  });
});

describe('Utils - Math Utils', () => {
  describe('- pagesArray', () => {
    it('should correctly generate an array of pages', () => {
      expect(pagesArray(1, 8)).toEqual([1, 2, 3, 4, 5, 0, 8]);
      expect(pagesArray(2, 8)).toEqual([1, 2, 3, 4, 5, 0, 8]);
      expect(pagesArray(3, 8)).toEqual([1, 2, 3, 4, 5, 0, 8]);
      expect(pagesArray(4, 8)).toEqual([1, 2, 3, 4, 5, 0, 8]);
      expect(pagesArray(5, 8)).toEqual([1, 0, 4, 5, 6, 7, 8]);
      expect(pagesArray(6, 8)).toEqual([1, 0, 4, 5, 6, 7, 8]);
      expect(pagesArray(7, 8)).toEqual([1, 0, 4, 5, 6, 7, 8]);
      expect(pagesArray(8, 8)).toEqual([1, 0, 4, 5, 6, 7, 8]);
      expect(pagesArray(1, 1)).toEqual([1]);
      expect(pagesArray(1, 2)).toEqual([1, 2]);
      expect(pagesArray(1, 3)).toEqual([1, 2, 3]);
      expect(pagesArray(3, 3)).toEqual([1, 2, 3]);
      expect(pagesArray(1, 4)).toEqual([1, 2, 3, 4]);
      expect(pagesArray(1, 5)).toEqual([1, 2, 3, 4, 5]);
      expect(pagesArray(1, 6)).toEqual([1, 2, 3, 4, 5, 6]);
      expect(pagesArray(1, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
      expect(pagesArray(5, 5)).toEqual([1, 2, 3, 4, 5]);
      expect(pagesArray(5, 6)).toEqual([1, 2, 3, 4, 5, 6]);
      expect(pagesArray(5, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
      expect(pagesArray(1, 10)).toEqual([1, 2, 3, 4, 5, 0, 10]);
      expect(pagesArray(4, 10)).toEqual([1, 2, 3, 4, 5, 0, 10]);
      expect(pagesArray(5, 10)).toEqual([1, 0, 4, 5, 6, 0, 10]);
      expect(pagesArray(8, 10)).toEqual([1, 0, 6, 7, 8, 9, 10]);
      expect(pagesArray(10, 10)).toEqual([1, 0, 6, 7, 8, 9, 10]);
      expect(pagesArray(7, 11)).toEqual([1, 0, 6, 7, 8, 0, 11]);
    });
  });

  describe('- getPosition', () => {
    it('should correctly calculate the position based on coordinate, grab and direction values', () => {
      expect(getPosition(10, 5, 5)).toEqual(0);
      expect(getPosition(20, 6, 5)).toEqual(9);
      expect(getPosition(60, 5, 1)).toEqual(54);
      expect(getPosition(9, 5, 5)).toEqual(-1);
      expect(getPosition(0, 10, 10)).toEqual(-20);
      expect(getPosition(10, 0, 1)).toEqual(9);
    });
  });
  describe('- getValueFromPosition', () => {
    it('should correctly calculate the value based on position, limit, step, max and min values', () => {
      expect(getValueFromPosition(12, 480, 1, 20, 0)).toEqual(1);
      expect(getValueFromPosition(0, 480, 1, 20, 0)).toEqual(0);
      expect(getValueFromPosition(0, 240, 1, 20, 0)).toEqual(0);
      expect(getValueFromPosition(20, 480, 1, 20, 5)).toEqual(6);
      expect(getValueFromPosition(10, 480, 1, 20, 19)).toEqual(19);
      expect(getValueFromPosition(10, 20, 1, 20, 0)).toEqual(10);
      expect(getValueFromPosition(1000, 480, 1, 8, 0)).toEqual(8);
      expect(getValueFromPosition(10, 0, 1, 8, 0)).toEqual(0);
    });
  });
});
