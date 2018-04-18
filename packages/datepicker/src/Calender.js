import React, { Component, PropTypes } from 'react';
import Day from './Day';
import {
	daysOfMonth,
	weekEnum,
	isDateFromNextMonth,
	isDateFromPrevMonth
} from '../utils/';
import moment from 'moment';

export default class Calendar extends Component {
	constructor (props) {
		super(props);

		this.state = {
			displayedMonth: props.date.clone().startOf('month'),
			showListMonths: false,
			viewType: "days"
		};
	}

	renderHeader () {
		const { viewType } = this.state;
		console.log("RENDER HEADER");

		switch(viewType) {
			case 'days':
				return this.renderNameOfDays();
			case 'months':
				//return this.renderListMonths();
		}
	}

	renderBody () {
		const { viewType } = this.state;
		console.log("RENDER Body");

		switch(viewType) {
			case 'days':
				return this.renderWeeks();
			case 'months':
				return this.renderListMonths();
		}
	}

	renderWeeks () {
		const _daysOfMonth = daysOfMonth(this.state.displayedMonth);
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

		return this.generateRows(months, 4);
	}

	renderListYears () {
		console.log("RENDING");
		const months = [
			"Jan", "Feb", "Maa", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec",
		];

		return this.generateRows(months, 4);
	}

	 generateRows(list, rowLength) {
		 return list.map(function(content, index) {
			 // map content to html elements
			 return <td key={index}>
				 <button tabIndex={index} type="button">
					 {content}
				 </button></td>;
		 }).reduce(function(r, element, index) {
			 // create element groups with size 4, result looks like:
			 // [[elem1, elem2, elem3], [elem4, elem5, elem6],x ...]
			 index % rowLength === 0 && r.push([]);
			 r[r.length - 1].push(element);
			 return r;
		 }, []).map(function(rowContent) {
			 // surround every group with a tr
			 return <tr>{rowContent}</tr>;
		 });
	}

	renderDay (daysOfMonth, week) {
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
						 active={this.props.date}
						 dayClassName={this.props.dayClassName}
						 dayActiveClassName={this.props.dayActiveClassName}
						 dayDisabledClassName={this.props.dayDisabledClassName}
						 dayFromOtherMonthClassName={this.props.dayFromOtherMonthClassName} />
			);
		});
	}

	changeViewType (delta) {
		const { viewType } = this.state;
		let switchTo;

		switch(viewType) {
			case 'days':
				switchTo = 'months';
				break;
			case 'months':
				switchTo = 'years';
				break;
			default:
				switchTo = 'days';
		}

		this.setState({
			viewType: switchTo
		});

	}

	renderNameOfDays () {
		console.log("RENDERING NAME OF DAYS");
		const nameOfDays = ["Ma", "Di", "Woe", "Do", "Vr", "Za", "Zo"];
		return (
			<tr className="m-datepicker__days">
				{
					nameOfDays.map((day, i) => <th key={i}>{ day }</th>)
				}
			</tr>
		);
	}

	moveDisplayedMonth (delta) {
		const dm = this.state.displayedMonth;
		this.setState({
			displayedMonth: dm.clone().add(delta, 'months')
		});
	}

	moveDisplayListOfMonths () {
		this.setState(prevState => ({
			showListMonths: !prevState.showListMonths
		}));
	}

	selectDay (date) {
		this.props.selectDay(date);
	}

	render () {
		const { calendarClassName } = this.props;

		return (
			<div className={calendarClassName}>
				<div className="m-datepicker__nav">
					<button tabIndex="-1"
									type="button"
									aria-label="previous month"
									onClick={this.moveDisplayedMonth.bind(this, -1)}
									className="a-button has-icon">
						<i className="fa fa-angle-left"></i>
					</button>
					<button
						tabIndex="0"
						type="button"
						onClick={this.changeViewType.bind(this)}
						className="m-datepicker__title a-button">
							{this.state.displayedMonth.format('MMMM YYYY')}
						</button>
					<button
						tabIndex="0"
						type="button"
						aria-label="next month"
						onClick={this.moveDisplayedMonth.bind(this, 1)}
						className="a-button has-icon">
						<i className="fa fa-angle-right"></i>
					</button>
				</div>
			<table cellPadding='0' cellSpacing='0'>
				<thead>
				{ this.renderHeader() }
				</thead>
				<tbody className="m-datepicker__calendar">
				{ this.renderBody() }
				</tbody>
			</table>
		</div>
		);
	}
}
/*

Calendar.propTypes = {
	date: PropTypes.oneOfType([
		PropTypes.instanceOf(moment),
		PropTypes.instanceOf(Date)
	]),
	minDate: PropTypes.oneOfType([
		PropTypes.instanceOf(moment),
		PropTypes.instanceOf(Date)
	]),
	maxDate: PropTypes.oneOfType([
		PropTypes.instanceOf(moment),
		PropTypes.instanceOf(Date)
	]),
	calendarClassName: PropTypes.string,
	selectDay: PropTypes.func,
	monthClassName: PropTypes.string,
	prevMonthClassName: PropTypes.string,
	nextMonthClassName: PropTypes.string,
	dayClassName: PropTypes.string,
	dayActiveClassName: PropTypes.string,
	dayDisabledClassName: PropTypes.string,
	dayFromOtherMonthClassName: PropTypes.string,
};

Calendar.defaultProps = {
	calendarClassName: 'calendar',
	prevMonthClassName: 'calendar__prevMonth',
	nextMonthClassName: 'calendar__nextMonth',
	monthClassName: 'calendar__month'
};*/
