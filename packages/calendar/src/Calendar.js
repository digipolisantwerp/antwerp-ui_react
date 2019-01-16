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
	/** Event for when the date changes. */
	onChange?: (e: object) => void,
};
class Calendar extends Component<Prop> {

	constructor(props) {
		super(props);
		const {activeDate, format} = this.props;

		this.state = {
			activeDate: activeDate ? Moment(activeDate, format) : Moment(),
		};
	}

	static defaultProps = {
		format: 'DD/MM/YYYY',
		activeDate: Moment()
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			activeDate: Moment(nextProps.activeDate, nextProps.format)
		};
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
				clickOnDate={this.changeDate.bind(this)}
			/>
		</div>
			;
	}
}

export default Calendar;