import React, { Component } from 'react';
import classNames from 'classnames';
import Calendar from 'react-calendar'

class Datepicker extends Component {
	state = {
		date: new Date(),
	}

	onChange = date => this.setState({ date })

	render() {
		return (
			<div>
				<Calendar
					className="react-calender"
					onChange={this.onChange}
					value={this.state.date}
				/>
			</div>
		);
	}
}

export default Datepicker;