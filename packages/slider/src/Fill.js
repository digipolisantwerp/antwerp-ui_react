import React, { PropTypes, Component } from 'react'
let Fill = ({
							start, end,
							getPositionFromValue
						}) =>
	<div
		className='m-range-slider__bar'
		style={{
			left: (getPositionFromValue(start) + 10 )+ 'px',
			width: getPositionFromValue(end - start) + 'px'
		}}
	/>

export default Fill