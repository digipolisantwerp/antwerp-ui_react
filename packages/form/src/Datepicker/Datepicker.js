import React, { Component } from 'react';
import Moment from 'moment';
import classNames from 'classnames';

import InputLabel from '../InputLabel';
import Calendar from '../../../calendar/src/Calendar';
import TextField from '../TextField';

const stateClasses = {
	success: 'has-success',
	warning: 'has-warning',
	error: 'has-error',
};

type InputStates = "success" | "warning" | "error";

type
	Props = {
	/** The label to display above the text field. */
	label?: string,
	/** The id for the text field. */
	id?: string,
	/** The name for the text field. */
	name?: string,
	/** If the field is required. */
	required?: string,
	/** The mask for input. */
	mask?: string,
	/** The date format used to render the date. */
	format?: string,
	/** The selected or predefined date. */
	activeDate?: string,
	/** Every date in this prop will be selected and disabled. */
	selectedDates?: Array,
	/** Toggle the calender open/closed. */
	open?: boolean,
	/** If the calender should open/close after date change. */
	autoClose?: boolean,
	/** If the calender should allow manual input. */
	disabled?: boolean,
	/** If it should be free text input or click only */
	readOnly?: boolean,
	/** enable/disable the days during the weekend. */
	noWeekends?: boolean,
	/** Every date less than this date will be disabled. */
	minDate?: string,
	/** Validation state of input. */
	state?: InputStates,
	/** Description to be shown under input. */
	description?: string,
	/** Every date greater than this date will be disabled. */
	maxDate?: string,
	/** Event for when the date changes. */
	onChange?: (e: object) => void,
	/** Event for onBlur. */
	onBlur?: (e: object) => void,
};

class Datepicker extends Component<Props> {
	constructor(props) {
		super(props);
		const {open} = this.props;

		Moment.updateLocale('nl', {
			months : ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
			weekdaysShort: ["Ma", "Di", "Woe", "Do", "Vr", "Za", "Zo"]
		});

		this.state = {
			input: '',
			open: open || false
		};
	}

	static defaultProps = {
		required: false,
		format: 'DD/MM/YYYY',
		autoClose: true,
		noWeekends: false,
		readOnly: false,
		disabled: false,
	};

	componentDidMount() {
		if (typeof window !== 'undefined') {
			document.addEventListener('mousedown', this.handleClickOutside.bind(this));
			document.addEventListener('touchstart', this.handleClickOutside.bind(this));
		}
	}

	componentDidUpdate() {
		if (typeof window !== 'undefined') {
			document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
			document.removeEventListener('touchstart', this.handleClickOutside.bind(this));
		}
	}

	handleClickOutside = (e) => {
		if (this.datepicker && this.datepicker.contains(e.target)) {
			return;
		}

		this.setState({ open: false });
	};

	static getDerivedStateFromProps(props, state) {
		if (props.activeDate) {
			const momentDate = Moment(props.activeDate, props.format, true);
			if (momentDate.isValid()) {
				return {
					activeDate: momentDate,
					input: props.activeDate
				};
			}
		}

		return null;
	}

	onClickInput() {
		if (this.props.readOnly) {
			this.toggleCalendar()
		}
	}

	changeDate(date) {
		const {onChange, format, autoClose} = this.props;
		const momentDate = Moment(date, format, true);
		const isValid = momentDate.isValid();
		if (onChange) onChange(date, isValid);

		this.setState(() => {
			let updateDate = {};
			if (isValid) {
				updateDate =   {
					activeDate: momentDate
				};
			}

			return {
				...updateDate,
				input: date,
				open: !autoClose || false
			}
		});
	}

	toggleCalendar() {
		if (!this.props.disabled) {
			this.setState({
				open: !this.state.open
			});
		}
	}

	render() {
		const {
			label,
			id,
			state,
			description,
			mask,
			required,
			disabled,
			readOnly,
			name,
			format,
			selectedDates,
			minDate,
			maxDate,
			noWeekends,
			onBlur,
		} = this.props;

		const {
			input,
			activeDate,
			open,
		} = this.state;

		const datepickerWrapperClass = classNames(
			'a-input',
			'has-icon-right',
			{
				'is-required': !!required,
				[`${stateClasses[state]}`]: !!state,
			}
		);

		const datepickerClass = classNames(
			'm-datepicker',
			'm-datepicker--fixed',
			{
				'is-open': open
			}
		);

		return <div className={datepickerWrapperClass} ref={node => this.datepicker = node}>
			{label && <InputLabel htmlFor={id}>{label}</InputLabel>}
			<div className="a-input__wrapper">
				<TextField
					mask={mask}
					name={name}
					id={id}
					value={input}
					required={required}
					readOnly={readOnly}
					disabled={disabled}
					onClick={() => this.onClickInput()}
					onChange={(e) => this.changeDate(e.target.value)}
					onBlur={onBlur} />
				<span onClick={this.toggleCalendar.bind(this)} className="fa fa-calendar is-clickable"></span>
				{open &&
					<div className={datepickerClass} aria-hidden="false">
						<div className="m-datepicker is-open">
							<Calendar
								format={format}
								activeDate={activeDate}
								selectedDates={selectedDates}
								minDate={minDate}
								maxDate={maxDate}
								noWeekends={noWeekends}
								onChange={this.changeDate.bind(this)}
							/>
						</div>
					</div>
				}
			</div>
			<small>{description}</small>
		</div>
		;
	}
}

export default Datepicker;