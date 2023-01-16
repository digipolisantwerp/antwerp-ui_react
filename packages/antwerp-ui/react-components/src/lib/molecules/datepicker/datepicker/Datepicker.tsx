import moment from 'moment';
import { forwardRef, useEffect, useMemo, useState } from 'react';
import { classNames } from '../../../../utils/dom.utils';
import { Button } from '../../../atoms/button';
import { Icon } from '../../../base/icon';
import { ActiveView, DatepickerProps } from '../datepicker.types';
import { DaysGrid } from './days-grid/DaysGrid';
import { MonthsGrid } from './MonthsGrid';
import { YearsGrid } from './YearsGrid';

export const Datepicker = forwardRef<HTMLDivElement, DatepickerProps>(
  (
    {
      qa,
      className,
      value,
      onChange,
      onBlur,
      ariaLabel,
      ariaLabelPreviousMonth,
      ariaLabelPreviousYear,
      ariaLabelPreviousYears,
      ariaLabelNextMonth,
      ariaLabelNextYear,
      ariaLabelNextYears,
      unavailable,
      unavailableFrom,
      unavailableTo,
      isOpen
    },
    ref
  ) => {
    const [activeDate, setActiveDate] = useState(value ? moment(value) : undefined);
    const [activeYear, setActiveYear] = useState(moment(value).year());
    const [activeMonth, setActiveMonth] = useState(moment(value).month());
    const [activeView, setActiveView] = useState<ActiveView>('days');
    const [yearsRowsStart, setYearsRowsStart] = useState(activeYear - 7);

    useEffect(() => {
      setActiveDate(value ? moment(value) : undefined);
    }, [value]);

    const activeTimeframeLabels = useMemo(() => {
      const timeframeMoment = moment().set('year', activeYear).set('month', activeMonth);
      let main = '';
      let next = '';
      let prev = '';
      switch (activeView) {
        case 'days':
          main = timeframeMoment.format('MMMM YYYY');
          next = `${ariaLabelNextMonth}, ${timeframeMoment.add(1, 'month').format('MMMM YYYY')}`;
          prev = `${ariaLabelPreviousMonth}, ${timeframeMoment.subtract(1, 'month').format('MMMM YYYY')}`;
          break;
        case 'months':
          main = timeframeMoment.format('YYYY');
          next = `${ariaLabelNextYear}, ${timeframeMoment.add(1, 'year').format('YYYY')}`;
          prev = `${ariaLabelPreviousYear}, ${timeframeMoment.subtract(1, 'year').format('YYYY')}`;
          break;
        case 'years':
          main = `${yearsRowsStart} - ${yearsRowsStart + 17}`;
          next = ariaLabelNextYears as string;
          prev = ariaLabelPreviousYears as string;
          break;
      }
      return { main, next, prev };
    }, [
      activeView,
      activeYear,
      activeMonth,
      yearsRowsStart,
      ariaLabelNextMonth,
      ariaLabelNextYear,
      ariaLabelNextYears,
      ariaLabelPreviousMonth,
      ariaLabelPreviousYear,
      ariaLabelPreviousYears
    ]);

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

    const handleChange = (value: moment.Moment) => {
      switch (activeView) {
        case 'days':
          setActiveDate(value);
          onChange && onChange(value.toISOString());
          break;
        case 'months':
          setActiveMonth(value.month());
          setActiveView('days');
          break;
        case 'years':
          setActiveYear(value.year());
          setActiveView('months');
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
              value={activeDate}
              onChange={handleChange}
              unavailableFrom={unavailableFrom}
              unavailableTo={unavailableTo}
              unavailable={unavailable}
            />
          );
        case 'months':
          return <MonthsGrid value={activeDate} onChange={handleChange} activeYear={activeYear} />;
        case 'years':
          return (
            <YearsGrid
              value={activeDate}
              onChange={handleChange}
              yearsRowsStart={yearsRowsStart}
              activeMonth={activeMonth}
            />
          );
      }
    };

    const classes = classNames({ 'm-datepicker': true, 'is-open': !!isOpen, [`${className}`]: !!className });
    return (
      <div
        ref={ref}
        aria-label={ariaLabel}
        className={classes}
        aria-hidden={!isOpen}
        data-qa={qa}
        onBlur={onBlur}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="m-datepicker__nav">
          <button
            type="button"
            className="m-datepicker__nav-title"
            aria-label={activeTimeframeLabels.main}
            onClick={handleChangeViewClick}
          >
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
);

Datepicker.defaultProps = {
  ariaLabel: 'Datumkiezer dagen bekijken',
  ariaLabelPreviousMonth: 'Ga naar de vorige maand',
  ariaLabelPreviousYear: 'Ga naar vorig jaar',
  ariaLabelPreviousYears: 'Ga naar voorgaande jaren',
  ariaLabelNextMonth: 'Ga naar volgende maand',
  ariaLabelNextYear: 'Ga naar volgend jaar',
  ariaLabelNextYears: 'Ga naar de volgende jaren'
};

export default Datepicker;
