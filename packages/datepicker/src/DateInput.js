import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class DateInput extends Component {
	render () {
		const { inputValue, inputOnClick, inputClassName } = this.props;

		return <input type='text'
									className={inputClassName}
									value={inputValue.format('DD-MM-YYYY')}
									onClick={inputOnClick}
									readOnly />;
	}
}

/*
DateInput.propTypes = {
	inputValue: PropTypes.instanceOf(moment),
	inputOnClick: PropTypes.func,
	inputClassName: PropTypes.string
};

DateInput.defaultProps = {
	inputClassName: 'datepicker__input'
};*/
