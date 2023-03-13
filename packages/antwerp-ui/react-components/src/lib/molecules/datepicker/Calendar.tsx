import { CalendarProps, CalendarView } from './Datepicker.types';
import { Button } from '../../atoms/button';
import { classNames } from '../../../utils/dom.utils';
import { DaysView } from './views/DaysView';
import { forwardRef, useEffect, useMemo, useState } from 'react';
import { getMonth, getYear, addMonths, subMonths, format, addYears, subYears } from 'date-fns';
import { Icon } from '../../base/icon';
import { MonthsView } from './views/MonthsView';
import { YearsView } from './views/YearsView';

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      ariaLabel,
      ariaLabelCurrentDay,
      ariaLabelNextMonth,
      ariaLabelNextYear,
      ariaLabelNextYears,
      ariaLabelPreviousMonth,
      ariaLabelPreviousYear,
      ariaLabelPreviousYears,
      className,
      isOpen,
      onBlur,
      onChange,
      qa,
      unavailable,
      unavailableFrom,
      unavailableTo,
      value
    },
    ref
  ) => {
    const [activeDate, setActiveDate] = useState(value ? new Date(value) : undefined);
    const [activeYear, setActiveYear] = useState(getYear(new Date(value || new Date())));
    const [activeMonth, setActiveMonth] = useState(getMonth(new Date(value || new Date())));
    const [activeView, setActiveView] = useState<CalendarView>(CalendarView.DAYS);
    const [yearsRowsStart, setYearsRowsStart] = useState(activeYear - 7);

    useEffect(() => {
      setActiveDate(value ? new Date(value) : undefined);
    }, [value]);

    const activeTimeframeLabels = useMemo(() => {
      const dateToShow = new Date(activeYear, activeMonth);
      return {
        [CalendarView.DAYS]: {
          main: format(dateToShow, 'MMMM yyyy'),
          next: `${ariaLabelNextMonth}, ${format(addMonths(dateToShow, 1), 'MMMM yyyy')}`,
          prev: `${ariaLabelPreviousMonth}, ${format(subMonths(dateToShow, 1), 'MMMM yyyy')}`
        },
        [CalendarView.MONTHS]: {
          main: format(dateToShow, 'yyyy'),
          next: `${ariaLabelNextYear}, ${format(addYears(dateToShow, 1), 'yyyy')}`,
          prev: `${ariaLabelPreviousYear}, ${format(subYears(dateToShow, 1), 'yyyy')}`
        },
        [CalendarView.YEARS]: {
          main: `${yearsRowsStart} - ${yearsRowsStart + 17}`,
          next: ariaLabelNextYears as string,
          prev: ariaLabelPreviousYears as string
        }
      }[activeView];
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
      if (activeView === CalendarView.DAYS) {
        setActiveYear(activeMonth === 0 ? activeYear - 1 : activeYear);
        return setActiveMonth(activeMonth === 0 ? 11 : activeMonth - 1);
      } else if (activeView === CalendarView.MONTHS) {
        return setActiveYear(activeYear - 1);
      } else if (activeView === CalendarView.YEARS) {
        return setYearsRowsStart(yearsRowsStart - 18);
      }
    };

    const handleNextDatesClick = () => {
      if (activeView === CalendarView.DAYS) {
        setActiveYear(activeMonth === 11 ? activeYear + 1 : activeYear);
        return setActiveMonth((activeMonth + 1) % 12);
      } else if (activeView === CalendarView.MONTHS) {
        return setActiveYear(activeYear + 1);
      } else if (activeView === CalendarView.YEARS) {
        return setYearsRowsStart(yearsRowsStart + 18);
      }
    };

    const handleChangeViewClick = () => {
      const rotateOrder = [CalendarView.DAYS, CalendarView.MONTHS, CalendarView.YEARS];
      setActiveView(rotateOrder[(rotateOrder.findIndex((v) => v === activeView) + 1) % rotateOrder.length]);
    };

    const handleChange = (value: Date) => {
      if (activeView === CalendarView.DAYS) {
        setActiveDate(value);
        return onChange && onChange(value.toISOString());
      } else if (activeView === CalendarView.MONTHS) {
        setActiveMonth(getMonth(value));
        return setActiveView(CalendarView.DAYS);
      } else if (activeView === CalendarView.YEARS) {
        setActiveYear(getYear(value));
        return setActiveView(CalendarView.MONTHS);
      }
    };

    const renderView = () => {
      switch (activeView) {
        case CalendarView.DAYS:
          return (
            <DaysView
              ariaLabelCurrentDay={ariaLabelCurrentDay}
              activeMonth={activeMonth}
              activeYear={activeYear}
              value={activeDate}
              onChange={handleChange}
              unavailableFrom={unavailableFrom}
              unavailableTo={unavailableTo}
              unavailable={unavailable}
            />
          );
        case CalendarView.MONTHS:
          return <MonthsView value={activeDate} onChange={handleChange} activeYear={activeYear} />;
        case CalendarView.YEARS:
          return (
            <YearsView
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
            <Icon name={activeView === CalendarView.DAYS ? 'arrow-down-1' : 'arrow-up-1'} />
          </button>
          <div className="m-datepicker__nav-pagination">
            <Button
              ariaLabel={activeTimeframeLabels.prev}
              emphasis="low"
              addOn={{ type: 'icon', iconProps: { name: 'arrow-left-1' } }}
              onClick={handlePreviousDatesClick}
            ></Button>
            <Button
              ariaLabel={activeTimeframeLabels.next}
              emphasis="low"
              addOn={{ type: 'icon', iconProps: { name: 'arrow-right-1' } }}
              onClick={handleNextDatesClick}
            ></Button>
          </div>
        </div>
        {renderView()}
      </div>
    );
  }
);

Calendar.defaultProps = {
  isOpen: true,
  ariaLabel: 'Kalender',
  ariaLabelCurrentDay: 'huidige dag',
  ariaLabelPreviousMonth: 'Ga naar de vorige maand',
  ariaLabelPreviousYear: 'Ga naar het vorig jaar',
  ariaLabelPreviousYears: 'Ga naar de voorgaande jaren',
  ariaLabelNextMonth: 'Ga naar de volgende maand',
  ariaLabelNextYear: 'Ga naar het volgend jaar',
  ariaLabelNextYears: 'Ga naar de volgende jaren',
  unavailable: []
};

export default Calendar;
