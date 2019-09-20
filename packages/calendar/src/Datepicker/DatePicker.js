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
			ariaLabelDatePicker,
		} = this.props;

		return <Calendar
			activeDate={activeDate}
			minDate={minDate}
			maxDate={maxDate}
			format={format}
			selectedDates={selectedDates}
			noWeekends={noWeekends}
			selectDay={clickOnDate.bind(this)}
			ariaLabelDatePicker={ariaLabelDatePicker}/>;
	}

	render() {
		return (
			this.renderCalendar()
		);
	}
}

export default DatePicker;