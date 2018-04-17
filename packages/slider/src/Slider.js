import React, { PropTypes, Component } from 'react'
import Fill from './Fill'
import Handle from './Handle'

class Slider extends Component {
	constructor(props, context){
		super(props, context)
		this.state = {
			limit: 0,
			start: props.start ? props.start : 0,
			end: props.end ? props.end : 20,
			min: props.min ? props.min : 0,
			max: props.max ? props.max : 20,
			step: props.step ? props.step : 1,
			value: props.value ? props.value : 0,
			minRange: props.minRange ? props.minRange : 5,
			tooltips: props.tooltips ? props.tooltips : false,
		}
	}

	componentDidMount () {
		window.addEventListener('resize', this.handleUpdate)
		this.handleUpdate()
	}

	componentWillUnmount () {
		window.removeEventListener('resize', this.handleUpdate)
	}

	updateStart = (start) => {
		let {
			end, minRange
		} = this.state
		if(end - start < minRange){
			console.log("ENDING IN RANGE");
			end = start + minRange
		}
		console.log("CHANGING");

		this.onChange(start, end)
	}

	onChange = (start, end) => {
		console.log('start',start, 'end', end)
		this.setState({
			start, end
		})
	}

	updateEnd = (end) => {
		let {
			start, minRange
		} = this.state
		if(end - start < minRange){
			start = end - minRange
		}
		this.onChange(start, end)
	}

	handleUpdate = () => {
		const sliderPos = this.slider[`offsetWidth`]
		const handlePos = 40

		const node = this.slider
		const direction = node.getBoundingClientRect()['left']
		console.log('base dir', direction)
		this.setState({
			limit: sliderPos - handlePos,
			grab: handlePos / 2,
			sliderPos,
			direction
		})
	}

	handleNoop = (e) => {
		e.stopPropagation()
		e.preventDefault()
	}

	getPositionFromValue = (value) => {
		const { limit } = this.state
		const { min, max } = this.props
		const diffMaxMin = max - min
		const diffValMin = value - min
		const percentage = diffValMin / diffMaxMin
		const pos = Math.round(percentage * limit)

		return pos
	}

	render(){
		let {
			sliderPos, direction,
			start, end,
			min, max,
			minRange,
			tooltips
		} = this.state

		return(
			<div className="m-range-slider" ref={(s) => { this.slider = s }}>
				<div className="m-range-slider__inner">
					<Fill
						start={start}
						end={end}
						getPositionFromValue={this.getPositionFromValue}
					/>

					<Handle
						value={start}
						onChange={this.updateStart}
						min={min}
						max={max - minRange}
						handleNoop={this.handleNoop}
						sliderPos={sliderPos}
						direction={direction}
						getPositionFromValue={this.getPositionFromValue}
						tooltips={tooltips}
					/>

					<Handle
						value={end}
						onChange={this.updateEnd}
						min={min + minRange}
						max={max}
						handleNoop={this.handleNoop}
						sliderPos={sliderPos}
						direction={direction}
						getPositionFromValue={this.getPositionFromValue}
						tooltips={tooltips}
					/>
				</div>
		</div>
		)
	}
}

export default Slider