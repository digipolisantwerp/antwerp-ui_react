import React, { Component, PropTypes } from 'react';
import Rows from './Rows';

import {
	daysOfMonth,
	yearsOfMonth,
	weekEnum,
	isDateFromNextMonth,
	isDateFromPrevMonth
} from '../utils/';

class Body extends Component {

	constructor (props) {
		super(props);
		this.state = {
			displayedMonth: props.displayedMonth,
			activeDate: props.value
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.displayedMonth !== nextProps.displayedMonth) {
				this.setState({
					displayedMonth: nextProps.displayedMonth,
					activeDate: nextProps.value
				});
		}
	}

	renderBody (displayMonth) {
		const { viewType } = this.props;
		switch(viewType) {
			case 'months':
				return this.renderListMonths();
			case "years":
				return this.renderListYears(displayMonth);
			default:
				return this.renderWeeks(displayMonth);
		}
	}

	renderWeeks (displayMonth) {
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

	renderListMonths () {
		const months = [
			"Jan", "Feb", "Maa", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec",
		];
		const { viewType, goToViewType } = this.props;
		return <Rows list={months} rowLength={4} onClick={goToViewType.bind(this, 'days')} />
	}

	renderListYears (displayMonth) {
		const years = yearsOfMonth(displayMonth);
		return <Rows list={years} rowLength={4} />
	}

	renderDay (daysOfMonth, week) {
		//@todo: in Day component
		const days = [0, 1, 2, 3, 4, 5, 6];
		const { minDate, maxDate } = this.props;

		return days.map((day, key) => {
			let date = daysOfMonth[week * 7 + day];
			let disabled;

			if (minDate && maxDate) {
				disabled = date.isBefore(minDate, 'day') || date.isAfter(maxDate, 'day');
			} else if (minDate) {
				disabled = date.isBefore(minDate, 'day');
			} else if (maxDate) {
				disabled = date.isAfter(maxDate, 'day');
			}

			const dayNextMonth = isDateFromNextMonth(date, this.state.displayedMonth);
			const dayPrevMonth = isDateFromPrevMonth(date, this.state.displayedMonth);
			return (
				<Day key={key}
						 day={date}
						 selectDay={this.selectDay.bind(this, date)}
						 disabled={disabled}
						 dayPrevMonth={dayPrevMonth}
						 dayNextMonth={dayNextMonth}
						 activeDate={this.state.activeDate}
						 dayClassName={this.props.dayClassName}
						 dayActiveClassName={this.props.dayActiveClassName}
						 dayDisabledClassName={this.props.dayDisabledClassName}
						 dayFromOtherMonthClassName={this.props.dayFromOtherMonthClassName} />
			);
		});
	}

	goToView(view) {
		console.log("GOING TO VIEW");
		console.log(view);
	}

	selectDay (date) {
		console.log('SELECTING');
		console.log(date);
		this.setState({
			activeDate: date
		});
	}


	render () {
		const {displayedMonth} = this.props;
		return(
			this.renderBody(displayedMonth)
		)
	}
}
export default Body;
/*
 DateInput.propTypes = {
 inputValue: PropTypes.instanceOf(moment),
 inputOnClick: PropTypes.func,
 inputClassName: PropTypes.string
 };

 DateInput.defaultProps = {
 inputClassName: 'datepicker__input'
 };*/
