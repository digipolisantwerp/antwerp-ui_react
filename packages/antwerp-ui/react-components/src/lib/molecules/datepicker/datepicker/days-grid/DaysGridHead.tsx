import moment from 'moment';

export function DaysGridHead() {
  return (
    <thead>
      <tr className="m-datepicker__grid-head">
        {[0, 1, 2, 3, 4, 5, 6].map((day) => {
          const weekday = moment().weekday(day);
          return (
            <th key={`weekday_${day}`} scope="col">
              <span title={weekday.format('dddd')}>{weekday.format('dd')}</span>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
