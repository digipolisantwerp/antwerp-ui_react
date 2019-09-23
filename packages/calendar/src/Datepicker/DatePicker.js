import React, { Component } from 'react';
import Calendar from './Calender';

const DatePicker = ({ clickOnDate, ...restProps }) => <Calendar selectDay={clickOnDate.bind(this)} {...restProps} />;

export default DatePicker;
