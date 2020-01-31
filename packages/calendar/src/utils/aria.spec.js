import aria from './aria';
import Moment from 'moment';

Moment.locale('nl');

describe('Aria util', () => {
  const someDate = Moment('2020-01-31');

  it('should return correct previous month', () => {
    const prevMonth = aria.mapNav(-1, 'days', someDate);
    expect(prevMonth).toBe('Ga naar vorige maand, december 2019');
  });

  it('should return correct next month', () => {
    const nextMonth = aria.mapNav(1, 'days', someDate);
    expect(nextMonth).toBe('Ga naar volgende maand, februari 2020');
  });

  it('should return correct previous year', () => {
    const prevYear = aria.mapNav(-1, 'months', someDate);
    expect(prevYear).toBe('Ga naar vorig jaar, 2019');
  });

  it('should return correct next year', () => {
    const nextYear = aria.mapNav(1, 'months', someDate);
    expect(nextYear).toBe('Ga naar volgend jaar, 2021');
  });

  it('should return correct period of previous years', () => {
    const prevYearsPeriod = aria.mapNav(-1, 'years', someDate);
    expect(prevYearsPeriod).toBe('Ga naar vorige periode van 12 jaar, 1997-2008');
  });

  it('should return correct period of next years', () => {
    const nextYearsPeriod = aria.mapNav(1, 'years', someDate);
    expect(nextYearsPeriod).toBe('Ga naar volgende periode van 12 jaar, 2021-2032');
  });
});
