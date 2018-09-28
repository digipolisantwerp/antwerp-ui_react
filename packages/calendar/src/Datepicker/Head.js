import React, { Component } from 'react';

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
		const nameOfDays = ["Ma", "Di", "Woe", "Do", "Vr", "Za", "Zo"];
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