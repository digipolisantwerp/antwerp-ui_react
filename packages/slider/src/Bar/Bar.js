import React, { Component } from 'react';

let Bar = ({
		start,
		end,
		getPositionFromValue,
		range
	}) =>

	<div
		className='m-range-slider__bar'
		style={{
			left: range && (getPositionFromValue(start))+ 'px',
			width: range ? getPositionFromValue(end - start) + 'px' : getPositionFromValue(start) + 'px'
		}}/>

export default Bar;