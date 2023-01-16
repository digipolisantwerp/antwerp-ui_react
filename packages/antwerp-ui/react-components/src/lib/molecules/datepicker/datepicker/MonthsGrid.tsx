/* eslint-disable react/jsx-no-useless-fragment */
import moment from 'moment';
import { classNames } from '../../../../utils/dom.utils';
import { MonthsGridProps } from '../datepicker.types';

export function MonthsGrid({ activeMonth }: MonthsGridProps) {
  const renderMonth = (month: number) => {
    const classes = classNames({ 'is-current': month === activeMonth });
    return (
      <td>
        <button type="button" className={classes}>
          {moment().set('month', month).format('MMMM')}
        </button>
      </td>
    );
  };

  const renderBody = () => {
    let index = 0;
    const monthPairs = [];
    while (index < 12) {
      monthPairs.push(
        <tr key={`month_pair_${index}`}>
          {/* in rule react/jsx-no-useless-fragment for some reason `tr` cannot have multiple children */}
          <>
            {renderMonth(index)}
            {renderMonth(index + 1)}
          </>
        </tr>
      );
      index += 2;
    }

    return monthPairs;
  };

  return (
    <div className="m-datepicker__list">
      <table>
        <tbody className="m-datepicker__list-body">{renderBody()}</tbody>
      </table>
    </div>
  );
}
