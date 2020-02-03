import React, { Component } from 'react';
import Calendar from './Calender';

const DatePicker = ({
  clickOnDate,
  format,
  locale,
  activeDate,
  selectedDates,
  minDate,
  maxDate,
  noWeekends,
  ariaLabelPrevious,
  ariaLabelNext,
  ariaLabelDatePicker,
  ariaLabelButtonDateFormat,
  qa
}) => <Calendar
  selectDay={clickOnDate.bind(this)}
  format={format}
  locale={locale}
  activeDate={activeDate}
  selectedDates={selectedDates}
  minDate={minDate}
  maxDate={maxDate}
  noWeekends={noWeekends}
  ariaLabelPrevious={ariaLabelPrevious}
  ariaLabelNext={ariaLabelNext}
  ariaLabelDatePicker={ariaLabelDatePicker}
  ariaLabelButtonDateFormat={ariaLabelButtonDateFormat}
  qa={qa}
  />;

export default DatePicker;
