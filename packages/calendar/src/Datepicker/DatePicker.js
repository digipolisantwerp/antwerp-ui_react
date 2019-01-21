import React, { Component } from 'react';
import Calendar from './Calender';

class DatePicker extends Component {

	renderCalendar() {
		const {
			activeDate,
			minDate,
			maxDate,
			format,
			selectedDates,
			noWeekends,
			clickOnDate
		} = this.props;

		return <Calendar
			activeDate={activeDate}
			minDate={minDate}
			maxDate={maxDate}
			format={format}
			selectedDates={selectedDates}
			noWeekends={noWeekends}
			selectDay={clickOnDate.bind(this)}/>;
	}

	render() {
		return (
			this.renderCalendar()
		);
	}
}

export default DatePicker;