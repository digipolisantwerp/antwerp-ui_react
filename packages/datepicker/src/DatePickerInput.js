import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Moment from 'moment';
import DatePicker from './DatePicker/DatePicker';
import {TextField} from '../../form/dist/index';

type Props = {
	/** The label to display above the field. */
	label: string,
	/** The date format used to render the date. */
	format?: string,
	/** The selected or predefined date. */
	activeDate?: typeof(DateTime),
	/** Toggle the calender open/closed. */
	isCalendarOpen?: boolean,
	/** Every date less than this date will be disabled */
	minDate:  typeof(DateTime),
	/** Every date greater than this date will be disabled */
	maxDate:  typeof(DateTime),
	/** Event for when the date changes. */
	onChange?: (e: object) => void,
};

class DatePickerInput extends Component<Props> {

	state = {
		activeDate: Moment(),
		isCalendarOpen: false
	};

	static defaultProps = {
		format: 'DD/MM/YYYY',
	};

	static getDerivedStateFromProps(nextProps, prevState){
		return {
			activeDate : Moment(nextProps.activeDate),
			isCalendarOpen: nextProps.isCalendarOpen
		};
	}

	componentDidMount () {
		if (typeof window !== 'undefined') {
			document.addEventListener('mousedown', this.onClickOutside.bind(this));
			document.addEventListener('touchstart', this.onClickOutside.bind(this));
		}
	}

	componentDidUpdate () {
		if (typeof window !== 'undefined') {
			document.removeEventListener('mousedown', this.onClickOutside.bind(this));
			document.removeEventListener('touchstart', this.onClickOutside.bind(this));
		}
	}

	onClickOutside (e) {
		const calendar = ReactDOM.findDOMNode(this.refs.calendar);
		const dateInput = ReactDOM.findDOMNode(this.refs.dateInput);

		if (!calendar) return;

		if (!calendar.contains(e.target) && !dateInput.contains(e.target)) {
			this.setState({
				isCalendarOpen: false
			});
		}
	}

	changeDate (day) {
		const {onChange, format} = this.props;
		if (onChange) onChange(day.clone().format(format));

		this.setState({
			activeDate: day,
			isCalendarOpen: false
		});
	}

	toggleCalendar () {
		this.setState({
			isCalendarOpen: !this.state.isCalendarOpen
		});
	}

	render () {
		const {
			label,
			format,
			minDate,
			maxDate
		} = this.props;

		const {
			activeDate,
			isCalendarOpen,
		} = this.state;

		return <div className="a-input has-icon-right">
						<label className="a-input__label" htmlFor="input-datepicker">{label}</label>
						<div className="a-input__wrapper">
							<TextField type='text'
												 name="input-datepicker"
												 id="input-datepicker"
												 value={activeDate.format(format)}
												 onClick={this.toggleCalendar.bind(this)}
												 onChange={this.changeDate.bind(this)}
												 readOnly />
							<span onClick={this.toggleCalendar.bind(this)} className="fa fa-calendar is-clickable"></span>
							<div className="m-datepicker is-open m-datepicker--fixed" aria-hidden="false">
								<DatePicker
									label={label}
									format={format}
									activeDate={activeDate}
									isCalendarOpen={isCalendarOpen}
									minDate={minDate}
									maxDate={maxDate}
									clickOnDate={this.changeDate.bind(this)}
								/>
							</div>
						</div>
					</div>
		;
	}
}

export default DatePickerInput;