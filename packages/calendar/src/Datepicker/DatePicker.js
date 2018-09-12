import React, {Component} from 'react';
import Calendar from './Calender';

class DatePicker extends Component {

	renderCalendar() {
		const {
			minDate,
			maxDate,
			activeDate,
			clickOnDate
		} = this.props;

		return <Calendar
			ref={() => {
				Calendar
			}}
			activeDate={activeDate}
			minDate={minDate}
			maxDate={maxDate}
			selectDay={clickOnDate.bind(this)}/>;
	}

	render() {
		return (
			this.renderCalendar()
		);
	}
}

export default DatePicker;