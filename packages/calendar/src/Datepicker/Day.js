import React, { Component } from 'react';
import Moment from 'moment';

class Day extends Component {

	static defaultProps = {
		dayClassName: '',
		dayActiveClassName: 'is-selected',
		selectedClassName: 'is-current',
		dayDisabledClassName: 'is-unavailable',
		dayFromOtherMonthClassName: 'is-faded'
	}

	handleOnClick = (day) => {
		const {disabled, selectDay} = this.props;
		if (disabled) return;
		selectDay(day);
	};

	render() {
		const {
			activeDate,
			day,
			selected,
			disabled,
			dayNextMonth,
			dayPrevMonth,
			dayActiveClassName,
			selectedClassName,
			dayDisabledClassName,
			dayFromOtherMonthClassName
		} = this.props;

		let buttonClasses = [];

		if (day.isSame(Moment(), 'day')) {
			buttonClasses.push(selectedClassName);
		}

		if (day.isSame(activeDate, 'day')) {
			buttonClasses.push(dayActiveClassName);
		}

		if (disabled) {
			buttonClasses.push(dayDisabledClassName);
		}

		if (selected) {
			buttonClasses.push(dayActiveClassName);
		}

		if (dayPrevMonth || dayNextMonth) {
			buttonClasses.push(dayFromOtherMonthClassName);
		}

		return <td>
			<button
				type="button"
				onClick={this.handleOnClick.bind(this, day)}
				className={buttonClasses.join(' ')}>
				{ day.date() }
			</button>
		</td>;
	}
}

export default Day;