import moment from 'moment';
import { DaysGridProps } from '../../datepicker.types';
import { DaysGridDay } from './DaysGridDay';
import { DaysGridHead } from './DaysGridHead';

export function DaysGrid({
  value,
  onChange,
  activeMonth,
  activeYear,
  unavailableFrom,
  unavailableTo,
  unavailable
}: DaysGridProps) {
  const renderWeek = (momentWeek: moment.Moment) => {
    const days: React.ReactElement[] = [];

    const index = moment(momentWeek).startOf('week');
    while (index.isSameOrBefore(momentWeek.endOf('week'), 'day')) {
      const activeMonthMoment = moment().set('year', activeYear).set('month', activeMonth);
      const date = index.clone();
      days.push(
        <DaysGridDay
          key={`day_${index.toISOString()}`}
          unavailableFrom={unavailableFrom}
          unavailableTo={unavailableTo}
          unavailable={unavailable}
          date={date}
          value={value}
          activeMonth={activeMonthMoment}
          onChange={onChange}
        />
      );
      index.add(1, 'day');
    }

    return <tr key={`week_${index.toISOString()}`}>{days}</tr>;
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
        <DaysGridHead />
        <tbody className="m-datepicker__grid-body">{renderBody()}</tbody>
      </table>
    </div>
  );
}
