import moment from 'moment';
import { useMemo, useState } from 'react';
import { classNames } from '../../../../utils/dom.utils';
import { Button } from '../../../atoms/button';
import { Icon } from '../../../base/icon';
import { ActiveView, DatepickerProps } from '../datepicker.types';
import { DaysGrid } from './DaysGrid';
import { MonthsGrid } from './MonthsGrid';
import { YearsGrid } from './YearsGrid';

export function Datepicker({ qa, ariaLabel, unavailable, unavailableFrom, unavailableTo, isOpen }: DatepickerProps) {
  const [activeYear, setActiveYear] = useState(moment().year());
  const [activeMonth, setActiveMonth] = useState(moment().month());
  const [activeView, setActiveView] = useState<ActiveView>('days');
  const [yearsRowsStart, setYearsRowsStart] = useState(activeYear - 7);

  const activeTimeframeLabels = useMemo(() => {
    const timeframeMoment = moment().set('year', activeYear).set('month', activeMonth);
    let main = '';
    let nextLabel = '';
    let prevLabel = '';
    switch (activeView) {
      case 'days':
        main = timeframeMoment.format('MMMM YYYY');
        nextLabel = `volgende maand, ${timeframeMoment.add(1, 'month').format('MMMM YYYY')}`;
        prevLabel = `de vorige maand, ${timeframeMoment.subtract(1, 'month').format('MMMM YYYY')}`;
        break;
      case 'months':
        main = timeframeMoment.format('YYYY');
        nextLabel = `volgend jaar, ${timeframeMoment.add(1, 'year').format('YYYY')}`;
        prevLabel = `vorig jaar, ${timeframeMoment.subtract(1, 'year').format('YYYY')}`;
        break;
      case 'years':
        main = `${yearsRowsStart} - ${yearsRowsStart + 17}`;
        nextLabel = 'de volgende jaren';
        prevLabel = 'voorgaande jaren';
        break;
    }
    return { main, next: `Ga naar ${nextLabel}`, prev: `Ga naar ${prevLabel}` };
  }, [activeView, activeYear, activeMonth, yearsRowsStart]);

  const handlePreviousDatesClick = () => {
    switch (activeView) {
      case 'days': {
        if (activeMonth === 0) {
          setActiveYear(activeYear - 1);
          setActiveMonth(11);
        } else {
          setActiveMonth(activeMonth - 1);
        }
        break;
      }
      case 'months': {
        setActiveYear(activeYear - 1);
        break;
      }
      case 'years': {
        setYearsRowsStart(yearsRowsStart - 18);
        break;
      }
    }
  };

  const handleNextDatesClick = () => {
    switch (activeView) {
      case 'days': {
        if (activeMonth === 11) {
          setActiveYear(activeYear + 1);
          setActiveMonth(0);
        } else {
          setActiveMonth(activeMonth + 1);
        }
        break;
      }
      case 'months': {
        setActiveYear(activeYear + 1);
        break;
      }
      case 'years': {
        setYearsRowsStart(yearsRowsStart + 18);
        break;
      }
    }
  };

  const handleChangeViewClick = () => {
    switch (activeView) {
      case 'days':
        setActiveView('months');
        break;
      case 'months':
        setActiveView('years');
        break;
      case 'years':
        setActiveView('days');
        break;
    }
  };

  const renderGrid = () => {
    switch (activeView) {
      case 'days':
        return (
          <DaysGrid
            activeMonth={activeMonth}
            activeYear={activeYear}
            unavailableFrom={unavailableFrom}
            unavailableTo={unavailableTo}
            unavailable={unavailable}
          />
        );
      case 'months':
        return <MonthsGrid activeMonth={activeMonth} />;
      case 'years':
        return <YearsGrid yearsRowsStart={yearsRowsStart} activeYear={activeYear} />;

      default:
        return null;
    }
  };

  const classes = classNames({ 'm-datepicker': true, 'is-open': !!isOpen });
  return (
    <div aria-label={ariaLabel} className={classes} aria-hidden={!isOpen}>
      <div className="m-datepicker__nav">
        <button type="button" className="m-datepicker__nav-title" onClick={handleChangeViewClick}>
          {activeTimeframeLabels.main}
          <Icon name={activeView === 'days' ? 'arrow-down-1' : 'arrow-up-1'} />
        </button>
        <div className="m-datepicker__nav-pagination">
          <Button
            ariaLabel={activeTimeframeLabels.prev}
            transparent
            icon="arrow-left-1"
            onClick={handlePreviousDatesClick}
          ></Button>
          <Button
            ariaLabel={activeTimeframeLabels.next}
            transparent
            icon="arrow-right-1"
            onClick={handleNextDatesClick}
          ></Button>
        </div>
      </div>
      {renderGrid()}
    </div>
  );
}

Datepicker.defaultProps = {
  ariaLabel: 'Datumkiezer dagen bekijken'
};

export default Datepicker;
