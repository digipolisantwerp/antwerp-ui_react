import moment from 'moment';
import { classNames } from '../../../../../utils/dom.utils';
import { useMemo } from 'react';
import { DaysGridDayProps } from '../../datepicker.types';

export function DaysGridDay({
  date,
  activeMonth,
  unavailable,
  unavailableFrom,
  unavailableTo,
  value,
  onChange
}: DaysGridDayProps) {
  const isUnavailable = useMemo(
    () =>
      (unavailableTo && date.isSameOrBefore(unavailableTo, 'day')) ||
      (unavailableFrom && date.isSameOrAfter(unavailableFrom, 'day')) ||
      !!unavailable?.find((u) => moment(u).isSame(date, 'day')),
    [unavailable, unavailableFrom, unavailableTo, date]
  );

  const isSelected = useMemo(() => !!value && value.isSame(date, 'day'), [value, date]);
  const isCurrent = date.isSame(moment(), 'day');

  const classes = classNames({
    'is-current': isCurrent,
    'is-faded': !date.isBetween(activeMonth.startOf('month'), activeMonth.endOf('month'), 'month', '[]'),
    'is-unavailable': isUnavailable,
    'is-selected': isSelected
  });
  return (
    <td>
      <button
        className={classes}
        tabIndex={isUnavailable ? -1 : undefined}
        disabled={isUnavailable}
        type="button"
        aria-pressed={isSelected}
        aria-label={`${date.format('dddd D MMMM YYYY')}${isCurrent ? ', huidige dag' : ''}`}
        onClick={() => {
          onChange(date);
        }}
      >
        <span>{date.format('D')}</span>
      </button>
    </td>
  );
}
