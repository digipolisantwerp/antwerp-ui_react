import React, { Component } from 'react';
import Moment from 'moment';
import { rotateArrayByPosition } from '../utils';

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
		// rotate arrays to put monday first, to match <Body>
		const nameOfDays = rotateArrayByPosition(Moment.weekdaysMin(), 2);
		const longNameDays = rotateArrayByPosition(Moment.weekdays(), 2);

		return (
			<tr className="m-datepicker__days">
				{
					nameOfDays.map((day, i) => <th key={i} className="u-text-capitalize" aria-label={longNameDays[i]}>{ day }</th>)
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
