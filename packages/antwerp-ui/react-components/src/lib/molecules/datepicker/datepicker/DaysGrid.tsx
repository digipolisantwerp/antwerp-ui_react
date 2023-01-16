import moment from 'moment';
import { classNames } from '../../../../utils/dom.utils';
import { DaysGridProps } from '../datepicker.types';

export function DaysGrid({ activeMonth, activeYear, unavailableFrom, unavailableTo, unavailable }: DaysGridProps) {
  const renderWeek = (momentWeek: moment.Moment) => {
    const days: React.ReactElement[] = [];

    const index = moment(momentWeek).startOf('week');
    while (index.isSameOrBefore(momentWeek.endOf('week'), 'day')) {
      const activeMonthMoment = moment().set('year', activeYear).set('month', activeMonth);
      const isUnavailable =
        (unavailableTo && index.isSameOrBefore(unavailableTo, 'day')) ||
        (unavailableFrom && index.isSameOrAfter(unavailableFrom, 'day')) ||
        !!unavailable?.find((u) => moment(u).isSame(index, 'day'));
      const classes = classNames({
        'is-current': index.isSame(moment(), 'day'),
        'is-faded': !index.isBetween(
          activeMonthMoment.startOf('month'),
          activeMonthMoment.endOf('month'),
          'month',
          '[]'
        ),
        'is-unavailable': isUnavailable
      });
      days.push(
        <td>
          <button
            className={classes}
            /* className="is-selected | " aria-pressed="true" */
            tabIndex={isUnavailable ? -1 : undefined}
            disabled={isUnavailable}
            type="button"
            aria-label={index.format('dddd D MMMM YYYY')}
          >
            <span>{index.format('D')}</span>
          </button>
        </td>
      );
      index.add(1, 'day');
    }

    return <tr>{days}</tr>;
  };

  const renderBody = () => {
    const weeks = [];
    const index = moment().set('year', activeYear).set('month', activeMonth).startOf('month').startOf('week');
    while (index.isSameOrBefore(moment().set('year', activeYear).set('month', activeMonth).endOf('month'), 'week')) {
      weeks.push(renderWeek(index));
      index.add(1, 'week');
    }

    return weeks;
  };

  return (
    <div className="m-datepicker__grid">
      <table>
        <thead>
          <tr className="m-datepicker__grid-head">
            {[0, 1, 2, 3, 4, 5, 6].map((day) => {
              const weekday = moment().weekday(day);
              return (
                <th key={`weekday_${day}`} scope="col">
                  <span title={weekday.format('dddd')}>
                    {weekday.format('dd')}
                    {/* //   .split('')
                    //   .map((l, i) => (i === 0 ? l.toUpperCase() : l))
                    //   .join('')} */}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="m-datepicker__grid-body">{renderBody()}</tbody>
      </table>
    </div>
  );
}
