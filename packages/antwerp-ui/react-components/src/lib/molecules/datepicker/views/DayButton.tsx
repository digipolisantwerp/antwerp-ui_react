import { classNames } from '../../../../utils/dom.utils';
import { useMemo } from 'react';
import { DayButtonProps } from '../datepicker.types';
import { endOfMonth, format, isAfter, isBefore, isSameDay, startOfMonth } from 'date-fns';

export function DayButton({
  date,
  monthYear,
  unavailable,
  unavailableFrom,
  unavailableTo,
  value,
  onChange,
  ariaLabelCurrentDay
}: DayButtonProps) {
  const isUnavailable = useMemo(
    () =>
      (unavailableTo && (isBefore(date, new Date(unavailableTo)) || isSameDay(date, new Date(unavailableTo)))) ||
      (unavailableFrom && (isAfter(date, new Date(unavailableFrom)) || isSameDay(date, new Date(unavailableFrom)))) ||
      !!unavailable?.find((u) => isSameDay(date, new Date(u))),
    [unavailable, unavailableFrom, unavailableTo, date]
  );

  const isSelected = useMemo(() => !!value && isSameDay(value, date), [value, date]);
  const isCurrent = isSameDay(date, new Date());

  const classes = classNames({
    'is-current': isCurrent,
    'is-faded': isBefore(date, startOfMonth(monthYear)) || isAfter(date, endOfMonth(monthYear)),
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
        aria-label={`${format(date, 'EEEE d MMMM yyyy')}${isCurrent ? `, ${ariaLabelCurrentDay}` : ''}`}
        onClick={() => {
          onChange(date);
        }}
      >
        <span>{format(date, 'd')}</span>
      </button>
    </td>
  );
}
