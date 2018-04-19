import React, { Component, PropTypes } from 'react';
import {yearsOfMonth} from '../utils';


class Nav extends Component {

	renderNav () {
		const { viewType, displayedMonth } = this.props;
		switch(viewType) {
			case 'months':
				return (displayedMonth.format('YYYY'));
			case 'years':
				return this.renderYearsNav(displayedMonth);
			default:
				return (displayedMonth.format('MMMM YYYY'));
		}
	}

	renderYearsNav (displayedMonth) {
		const years = yearsOfMonth(displayedMonth);
		return years[0] + '-' + years.slice(-1);
	}

	render () {
		const { onClickPrevious, onClickViewType, onClickNext } = this.props;

		return(
			<React.Fragment>
				<button tabIndex="-1"
					type="button"
					aria-label="previous month"
					onClick={onClickPrevious}
					className="a-button has-icon">
					<i className="fa fa-angle-left"></i>
				</button>
				<button
					tabIndex="0"
					type="button"
					onClick={onClickViewType}
					className="m-datepicker__title a-button">
					{this.renderNav()}
				</button>
				<button
					tabIndex="0"
					type="button"
					aria-label="next month"
					onClick={onClickNext}
					className="a-button has-icon">
					<i className="fa fa-angle-right"></i>
					</button>
			</React.Fragment>
		)
	}
}

export default Nav;
/*
 DateInput.propTypes = {
 inputValue: PropTypes.instanceOf(moment),
 inputOnClick: PropTypes.func,
 inputClassName: PropTypes.string
 };

 DateInput.defaultProps = {
 inputClassName: 'datepicker__input'
 };*/
