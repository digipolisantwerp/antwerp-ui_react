import React, { Component, PropTypes } from 'react';

class Head extends Component {

	renderHeader () {
		const { viewType } = this.props;

		switch(viewType) {
			case 'months':
				return null;
			case 'years':
				return null;
			default:
				return this.renderNameOfDays();
		}
	}

	renderNameOfDays () {
		const nameOfDays = ["Ma", "Di", "Woe", "Do", "Vr", "Za", "Zo"];
		return (
			<tr className="m-datepicker__days">
				{
					nameOfDays.map((day, i) => <th key={i}>{ day }</th>)
				}
			</tr>
		);
	}

/*
	private renderTitle(): string {
		switch (this.state.gridType) {
			case "d":
				return this.state.locale.months[this.state.viewDate.getMonth()] +
					" " + this.state.viewDate.getFullYear();
			case "m":
			case "y":
			default:
				return this.state.viewDate.getFullYear().toString();
		}

	}*/

	render () {
		//const { inputValue, inputOnClick, inputClassName } = this.props;
		return(
			this.renderHeader()
		)
	}
}
export default Head;
/*
 DateInput.propTypes = {
 inputValue: PropTypes.instanceOf(moment),
 inputOnClick: PropTypes.func,
 inputClassName: PropTypes.string
 };

 DateInput.defaultProps = {
 inputClassName: 'datepicker__input'
 };*/
