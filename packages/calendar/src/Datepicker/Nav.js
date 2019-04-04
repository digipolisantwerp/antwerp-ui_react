import React, { Component } from 'react';
import {yearsOfMonth} from '../utils';
import Button from '../../../button/src/Button';

class Nav extends Component {

	renderNav() {
		const {viewType, displayedPeriod} = this.props;
		switch (viewType) {
			case 'months':
				return (displayedPeriod.format('YYYY'));
			case 'years':
				return this.renderYearsNav(displayedPeriod);
			default:
				return displayedPeriod.format('MMMM YYYY');
		}
	}

	renderYearsNav(displayedMonth) {
		const years = yearsOfMonth(displayedMonth);
		return years[0] + '-' + years.slice(-1);
	}

	render() {
		const {onClickPrevious, onClickViewType, onClickNext} = this.props;

		return (
			<React.Fragment>
				<Button
					type="button"
					onClick={onClickPrevious}
					className={"a-button has-icon"}
					icon={"angle-left"}/>

				<Button
					type="button"
					onClick={onClickViewType}
					className={"m-datepicker__title a-button"}>
					{this.renderNav()}
				</Button>

				<Button
					type="button"
					onClick={onClickNext}
					className={"a-button has-icon"}
					icon={"angle-right"}/>
			</React.Fragment>
		)
	}
}

export default Nav;