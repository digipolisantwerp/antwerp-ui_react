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
	  // True parameter to sort weekdays by locale
		const nameOfDays = Moment.weekdaysMin(true);
		const longNameDays = Moment.weekdays(true);
		const orderedLongNameDays = rotateArrayByPosition(longNameDays, 2);

		return (
			<tr className="m-datepicker__days">
				{
					nameOfDays.map((day, i) => <th key={i} className="u-text-capitalize" aria-label={orderedLongNameDays[i]}>{ day }</th>)
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
