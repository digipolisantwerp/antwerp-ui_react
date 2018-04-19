import React, { Component, PropTypes } from 'react';

class Rows extends Component {

	generateRows() {
		const { list, rowLength, onClick } = this.props;
		return list.map(function(content, index) {
			return <td key={index}>
				<button tabIndex={index} onClick={onClick} type="button">
					{content}
				</button></td>;
		}).reduce(function(r, element, index) {
			// create element groups with size 4, result looks like:
			// [[elem1, elem2, elem3], [elem4, elem5, elem6],x ...]
			index % rowLength === 0 && r.push([]);
			r[r.length - 1].push(element);
			return r;
		}, []).map(function(rowContent) {
			// surround every group with a tr
			return <tr>{rowContent}</tr>;
		});
	}

	render () {
		return(
			this.generateRows()
		)
	}
}

export default Rows;
/*
 DateInput.propTypes = {
 inputValue: PropTypes.instanceOf(moment),
 inputOnClick: PropTypes.func,
 inputClassName: PropTypes.string
 };

 DateInput.defaultProps = {
 inputClassName: 'datepicker__input'
 };*/
