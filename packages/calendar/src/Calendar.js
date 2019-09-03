import React, { Component } from 'react';
import Moment from 'moment';
import DatePicker from './Datepicker/DatePicker';

type
	Props = {
	/** The date format used to render the date. */
	format?: string,
	/** The selected or predefined date. */
	activeDate?: string,
	/** Every date in this prop will be selected and disabled */
	selectedDates?: Array,
	/** Every date less than this date will be disabled */
	minDate: string,
	/** Every date greater than this date will be disabled */
	maxDate: string,
	/** enable/disable the days during the weekend */
	noWeekends?: boolean,
	/** Event for when the date changes. */
	onChange?: (e: object) => void,
};
class Calendar extends Component<Prop> {

	constructor(props) {
		super(props);
		const {activeDate, format} = this.props;

		Moment.updateLocale('nl', {
			months : ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
			monthsShort: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
			weekdaysShort: ["Ma", "Di", "Woe", "Do", "Vr", "Za", "Zo"]
		});

		this.state = {
			activeDate: activeDate ? Moment(activeDate, format) : '',
		};
	}

	static defaultProps = {
		format: 'DD/MM/YYYY',
		noWeekends: false
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.activeDate) {
			return {
				activeDate: Moment(nextProps.activeDate, nextProps.format)
			};
		}

		return null;
	}

	changeDate(day) {
		const {onChange, format} = this.props;
		if (onChange) onChange(Moment(day).format(format));

		this.setState({
			activeDate: day
		});
	}

	render() {
		const {
			format,
			selectedDates,
			minDate,
			maxDate,
			noWeekends,
		} = this.props;

		const {
			activeDate,
		} = this.state;

		return <div className="m-datepicker is-open">
			<DatePicker
				format={format}
				activeDate={activeDate}
				selectedDates={selectedDates}
				minDate={Moment(minDate, format)}
				maxDate={Moment(maxDate, format)}
				noWeekends={noWeekends}
				clickOnDate={this.changeDate.bind(this)}
			/>
		</div>
			;
	}
}

export default Calendar;
