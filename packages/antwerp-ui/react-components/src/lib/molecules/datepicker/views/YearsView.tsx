import { format, getDate, getYear } from 'date-fns';
import { classNames } from '../../../../utils/dom.utils';
import { YearsViewProps } from '../datepicker.types';

export function YearsView({ yearsRowsStart, value, activeMonth, onChange }: YearsViewProps) {
  const renderYear = (year: number) => {
    const classes = classNames({
      'is-current': year === getYear(new Date()),
      'is-selected': !!(value && year === getYear(new Date(value)))
    });
    return (
      <td>
        <button
          type="button"
          className={classes}
          onClick={() => onChange(new Date(year, activeMonth, value ? getDate(value) : 1))}
        >
          {format(new Date(year, activeMonth), 'yyyy')}
        </button>
      </td>
    );
  };

  const renderBody = () => {
    let index = 0;
    const yearsRows = [];
    while (index < 16) {
      yearsRows.push(
        <tr key={`aui-calendar-years-${index}`}>
          <>
            {renderYear(yearsRowsStart + index)}
            {renderYear(yearsRowsStart + index + 1)}
            {renderYear(yearsRowsStart + index + 2)}
          </>
        </tr>
      );
      index += 3;
    }
    return yearsRows;
  };

  return (
    <div className="m-datepicker__list">
      <table>
        <tbody className="m-datepicker__list-body">{renderBody()}</tbody>
      </table>
    </div>
  );
}
