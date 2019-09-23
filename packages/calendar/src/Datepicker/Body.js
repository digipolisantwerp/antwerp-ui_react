import React, {Component} from 'react';
import Moment from 'moment';
import Rows from './Rows';
import Day from './Day';

import {
	daysOfMonth,
	yearsOfMonth,
	weekEnum,
	isDateFromNextMonth,
	isDateFromPrevMonth
} from '../utils';

class Body extends Component {

	static defaultProps = {
		selectedDates: [],
	}

	renderBody(displayedPeriod) {
		const {viewType} = this.props;
		switch (viewType) {
			case 'months':
				return this.renderListMonths();
			case "years":
				return this.renderListYears(displayedPeriod);
			default:
				return this.renderWeeks(displayedPeriod);
		}
	}

	renderWeeks(displayMonth) {
		const _daysOfMonth = daysOfMonth(displayMonth);
		const _weekEnum = weekEnum(_daysOfMonth);
		return _weekEnum.map((week, key) => {
			return (
				<tr key={key}>
					{this.renderDay(_daysOfMonth, week)}
				</tr>
			);
		});
	}

	renderListMonths() {
		const months = Moment.monthsShort();
		return <Rows list={months} rowLength={4} onClick={this.handleOnClick.bind(this, 'days')}/>
	}

	renderListYears(displayMonth) {
		const years = yearsOfMonth(displayMonth);
		return <Rows list={years} rowLength={4} onClick={this.handleOnClick.bind(this, 'months')}/>
	}

	renderDay(_daysOfMonth, week) {
		const days = [0, 1, 2, 3, 4, 5, 6];
		const {
			activeDate,
			displayedPeriod,
			selectedDates,
			minDate,
			maxDate,
			format,
			noWeekends,
			selectDay,
			ariaLabelButtonDateFormat
		} = this.props;

		return days.map((day, key) => {
			let date = _daysOfMonth[week * 7 + day];
			let disabled;
			let selected = false;

			if (minDate && maxDate) {
				disabled = date.isBefore(minDate, 'day') || date.isAfter(maxDate, 'day');
			} else if (minDate) {
				disabled = date.isBefore(minDate, 'day');
			} else if (maxDate) {
				disabled = date.isAfter(maxDate, 'day');
			}

			if (noWeekends) {
				disabled = date.day() === 6 || date.day() === 0;
			}

			let dayNextMonth = isDateFromNextMonth(date, displayedPeriod);
			let dayPrevMonth = isDateFromPrevMonth(date, displayedPeriod);

			selectedDates.forEach(function (selectedDate) {
				if (date.isSame(Moment(selectedDate, format), 'day')) {
					selected = true;
					dayPrevMonth = false;
					dayNextMonth = false;

				}
			});

			return (
				<Day
					key={key}
					day={date}
					selectDay={selectDay.bind(this, date)}
					disabled={disabled}
					selected={selected}
					dayPrevMonth={dayPrevMonth}
					dayNextMonth={dayNextMonth}
					activeDate={activeDate}
					ariaLabelButtonDateFormat={ariaLabelButtonDateFormat}/>
			);
		});
	}

	handleOnClick = (type, event) => {
		const value = event.target.value;
		let newDisplayedPeriod = null;
		const {displayedPeriod} = this.props;

		if (type === 'days') {
			newDisplayedPeriod = Moment(displayedPeriod.format('YYYY') + value, "YYYY MMM");
		} else if (type === 'months') {
			newDisplayedPeriod = Moment(displayedPeriod.format('MM') + value, "MM YYYY");
		}

		const {goToViewType} = this.props;
		goToViewType(type, newDisplayedPeriod);
	};

	render() {
		const {displayedPeriod} = this.props;
		return (
			this.renderBody(displayedPeriod)
		)
	}
}
export default Body;