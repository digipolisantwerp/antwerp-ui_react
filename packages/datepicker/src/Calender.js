import React, { Component, PropTypes } from 'react';
import Nav from './Nav';
import Body from './Body';
import Head from './Head';
import {switchToView} from '../utils/';
import Moment from 'moment';

class Calendar extends Component {
	constructor (props) {
		super(props);

		this.state = {
			displayedMonth: Moment(),
			showListMonths: false,
			viewType: "days"
		};
	}

	changeViewType () {
		const { viewType } = this.state;
		let switchTo = switchToView(viewType);
		this.goToViewType(switchTo);
	}

	goToViewType (switchTo) {
		console.log('GOING TO VIEWTYPE');
		console.log(switchTo);
		this.setState({
			viewType: switchTo
		});

	}

	moveDisplayedPeriod (delta) {
		const { viewType, displayedMonth } = this.state;
		const period = viewType === 'days' ? 'months' : 'years';

		this.setState({
			displayedMonth: displayedMonth.clone().add(delta, period)
		});
	}

	render () {
		const { calendarClassName, selectDay, date } = this.props;
		const { viewType, displayedMonth } = this.state;

		console.log('rendering calender');
		return (
			<div className={calendarClassName}>
				<div className="m-datepicker__nav">
					<Nav
						viewType={viewType}
						displayedMonth={displayedMonth}
						onClickPrevious={this.moveDisplayedPeriod.bind(this, -1)}
						onClickViewType={this.changeViewType.bind(this)}
						onClickNext={this.moveDisplayedPeriod.bind(this, 1)}
					/>
				</div>
			<table cellPadding='0' cellSpacing='0'>
				<thead>
					<Head
						displayedMonth={displayedMonth}
						viewType={viewType}
					/>
				</thead>
				<tbody className="m-datepicker__calendar">
					<Body viewType={viewType}
								displayedMonth={displayedMonth}
								selectDay={selectDay.bind(this)}
								date={date}
								goToViewType={this.goToViewType.bind(this)}
					/>
				</tbody>
			</table>
		</div>
		);
	}
}

export default Calendar;
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
