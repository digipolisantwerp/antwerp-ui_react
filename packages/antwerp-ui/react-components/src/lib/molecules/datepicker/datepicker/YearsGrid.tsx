/* eslint-disable react/jsx-no-useless-fragment */
import moment from 'moment';
import { classNames } from '../../../../utils/dom.utils';
import { YearsGridProps } from '../datepicker.types';

export function YearsGrid({ yearsRowsStart, value, activeMonth, onChange }: YearsGridProps) {
  const renderYear = (year: number) => {
    const classes = classNames({ 'is-current': year === moment().year() });
    return (
      <td>
        <button
          type="button"
          className={classes}
          onClick={() =>
            onChange(
              moment()
                .set('year', year)
                .set('month', activeMonth)
                .set('date', value?.date() ?? 1)
            )
          }
        >
          {moment().set('year', year).format('YYYY')}
        </button>
      </td>
    );
  };

  const renderBody = () => {
    let index = 0;
    const yearsRows = [];
    while (index < 16) {
      yearsRows.push(
        <tr key={`years_row_${index}`}>
          {/* in rule react/jsx-no-useless-fragment for some reason `tr` cannot have multiple children */}
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
