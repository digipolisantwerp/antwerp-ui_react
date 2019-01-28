import React, { Component } from 'react';
import Moment from 'moment';

class Head extends Component {

	renderHeader() {
		const {viewType} = this.props;

		switch (viewType) {
			case 'months':
				return null;
			case 'years':
				return null;
			default:
				return this.renderNameOfDays();
		}
	}

	renderNameOfDays() {
		const nameOfDays = Moment.weekdaysShort();
		return (
			<tr className="m-datepicker__days">
				{
					nameOfDays.map((day, i) => <th key={i}>{ day }</th>)
				}
			</tr>
		);
	}

	render() {
		return (
			this.renderHeader()
		)
	}
}
export default Head;