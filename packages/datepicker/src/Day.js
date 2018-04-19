import React, { Component, PropTypes } from 'react';


type Props = {
	disabled: boolean,
	dayNextMonth: boolean,
	dayPrevMonth: boolean,
	selectDay: void,
	day: void, //add instance of moment
	active: void,//add instance of moment
	dayClassName: string,
	dayActiveClassName: string,
	dayDisabledClassName: string,
	dayFromOtherMonthClassName: string,
};

class Day extends Component<Prop> {

	static defaultProps = {
		dayClassName: '',
		dayActiveClassName: 'is-selected',
		isUnavailableClassName: 'is-unavailable',
		dayDisabledClassName: 'is-faded',
		dayFromOtherMonthClassName: 'is-faded'
	}

	constructor (props) {
		super(props);

		this.state = {
			activeDate: props.activeDate
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.activeDate !== nextProps.activeDate) {
			this.setState({
				activeDate: nextProps.activeDate
			});
		}
	}

	handleOnClick = (day) => {
		const {disabled, selectDay} = this.props;
		if (disabled) return;
		selectDay(day);
	};

	render() {
		  const {
			day,
			disabled,
			dayNextMonth,
			dayPrevMonth,
			selectDay,
			dayClassName,
			dayActiveClassName,
			dayDisabledClassName,
			dayFromOtherMonthClassName} = this.props;

		  const {
				activeDate
			} = this.state;

			let classes = [dayClassName];
			let buttonClasses = [];

			if (day.isSame(activeDate, 'day')) {
				buttonClasses.push(dayActiveClassName);
			}

			if (disabled) {
				classes.push(dayDisabledClassName);
			}

			if (dayPrevMonth || dayNextMonth) {
				buttonClasses.push(dayFromOtherMonthClassName);
			}

			return <td className={classes.join(' ')}>
							<button
								type="button"
								onClick={this.handleOnClick.bind(this, day)}
								className={buttonClasses.join(' ')}>
								{ day.date() }
							</button></td>;
	}
}

export default Day;