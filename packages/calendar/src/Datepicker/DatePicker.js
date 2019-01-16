import React, { Component } from 'react';
import Calendar from './Calender';

class DatePicker extends Component {

	renderCalendar() {
		const {
			minDate,
			maxDate,
			activeDate,
			selectedDates,
			format,
			clickOnDate
		} = this.props;

		return <Calendar
			activeDate={activeDate}
			minDate={minDate}
			maxDate={maxDate}
			format={format}
			selectedDates={selectedDates}
			selectDay={clickOnDate.bind(this)}/>;
	}

	render() {
		return (
			this.renderCalendar()
		);
	}
}

export default DatePicker;