import React, {Component} from 'react';

class Day extends Component {

	static defaultProps = {
		dayClassName: '',
		dayActiveClassName: 'is-selected',
		isUnavailableClassName: 'is-unavailable',
		dayDisabledClassName: 'is-faded',
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
			disabled,
			dayNextMonth,
			dayPrevMonth,
			dayActiveClassName,
			dayDisabledClassName,
			dayFromOtherMonthClassName} = this.props;

			let buttonClasses = [];

			if (day.isSame(activeDate, 'day')) {
				buttonClasses.push(dayActiveClassName);
			}

			if (disabled) {
				buttonClasses.push(dayDisabledClassName);
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