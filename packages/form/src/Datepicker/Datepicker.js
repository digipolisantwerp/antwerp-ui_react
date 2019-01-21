import React, { Component } from 'react';
import Moment from 'moment';
import TextField from '../TextField';
import InputLabel from '../InputLabel';
import Calendar from '../../../calendar/src/Calendar';
import classNames from 'classnames';

type
	Props = {
	/** The label to display above the text field. */
	label: string,
	/** The id for the text field. */
	id: string,
	/** The name for the text field. */
	name: string,
	/** The date format used to render the date. */
	format?: string,
	/** The selected or predefined date. */
	activeDate?: string,
	/** Every date in this prop will be selected and disabled */
	selectedDates?: Array,
	/** Toggle the calender open/closed. */
	open?: boolean,
	/** If the calender should open/close after datechange. */
	autoClose?: boolean,
	/** enable/disable the days during the weekend */
	noWeekends?: boolean,
	/** Every date less than this date will be disabled */
	minDate: string,
	/** Every date greater than this date will be disabled */
	maxDate: string,
	/** Event for when the date changes. */
	onChange?: (e: object) => void,
};

class Datepicker extends Component<Props> {

	constructor(props) {
		super(props);
		const {activeDate, open, format} = this.props;

		this.state = {
			activeDate: activeDate ? Moment(activeDate, format) : Moment(),
			open: open || false
		};
	}

	static defaultProps = {
		format: 'DD/MM/YYYY',
		autoClose: true,
		noWeekends: false
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
		if (this.datepicker.contains(e.target)) {
			return;
		}

		this.setState({ open: false });
	};

	changeDate(day) {
		const {onChange, format, autoClose} = this.props;
		if (onChange) onChange(day);

		this.setState({
			activeDate: Moment(day, format),
			open: !autoClose || false
		});
	}

	toggleCalendar() {
		this.setState({
			open: !this.state.open
		});
	}

	render() {
		const {
			label,
			id,
			name,
			format,
			selectedDates,
			minDate,
			maxDate,
			noWeekends,
		} = this.props;

		const {
			activeDate,
			open,
		} = this.state;

		const classNamesDatepicker = classNames(
			'm-datepicker',
			'm-datepicker--fixed',
			{
				'is-open': open
			}
		);

		return <div className="a-input has-icon-right" ref={node => this.datepicker = node}>
			{label && <InputLabel htmlFor={id}>{label}</InputLabel>}
			<div className="a-input__wrapper">
				<TextField
					name={name}
					id={id}
					value={Moment(activeDate).format(format)}
					onClick={this.toggleCalendar.bind(this)}
					onChange={this.changeDate.bind(this)}
					readOnly/>
				<span onClick={this.toggleCalendar.bind(this)} className="fa fa-calendar is-clickable"></span>
				{ open &&
				<div className={classNamesDatepicker} aria-hidden="false">
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
		</div>
		;
	}
}

export default Datepicker;