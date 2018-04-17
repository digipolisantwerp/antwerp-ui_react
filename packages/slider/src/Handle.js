import React, { PropTypes, Component } from 'react'

class Handle extends Component {

	static defaultProps = {
		step: 1
	}

	constructor (props, context) {
		super(props, context)

		this.state = {
			limit: 480,
			grab: 5
		}
	}

	componentWillReceiveProps(nextProps){
		let {sliderPos} = nextProps
		const handlePos = 40
		this.setState({
			limit: sliderPos - handlePos
		})
	}

	handleNoop = (e) => {
		e.stopPropagation()
		e.preventDefault()
	}

	handleStart = () => {
		document.addEventListener('mousemove', this.handleDrag)
		document.addEventListener('mouseup', this.handleEnd)
	}

	handleDrag = (e) => {
		this.handleNoop(e)
		const { onChange } = this.props
		if (!onChange) return

		const value = this.position(e)
		onChange && onChange(value)
	}

	handleEnd = () => {
		document.removeEventListener('mousemove', this.handleDrag)
		document.removeEventListener('mouseup', this.handleEnd)
	}

	position = (e) => {
		const { grab } = this.state
		const {
			direction
		} = this.props

		const clientCoordinateStyle = `clientX`
		const coordinate = !e.touches
			? e[clientCoordinateStyle]
			: e.touches[0][clientCoordinateStyle]

		const pos = coordinate - direction - grab
		const value = this.getValueFromPosition(pos)

		return value
	}

	getValueFromPosition = (pos) => {
		let value = null
		const { limit } = this.state
		const { min, max, step } = this.props
		const percentage = (clamp(pos, 0, limit) / (limit || 1))
		const baseVal = step * Math.round(percentage * (max - min) / step)

		value = baseVal + min

		if (value >= max) value = max
		if (value <= min) value = min

		return value
	}

	render () {

		let {
			value,
			handleNoop, getPositionFromValue,tooltips
		} = this.props

		return (
			<div
				ref={(sh) => { this.handle = sh }}
				className='m-range-slider__handle'
				onMouseDown={this.handleStart}
				onTouchEnd={handleNoop}
				onTouchMove={this.handleDrag}
				style={{
					left: getPositionFromValue(value) + 'px'
				}}
			>
				{tooltips ? (
					<div className="m-range-slider__tooltip a-tooltip a-tooltip--primary a-tooltip--top">
						<p>{value}%</p>
					</div>
				) : (
					<span className="m-range-slider__value">{getPositionFromValue(value)}%</span>
				)}
			</div>
		)
	}
}

export default Handle

function clamp (value, min, max) {
	return Math.min(Math.max(value, min), max)
}