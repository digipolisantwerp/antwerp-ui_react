import React, {Component } from 'react';
import {InputLabel} from '../../form';
import Bar from './Bar';
import Handle from './Handle';

type Props = {
  /** The label to display above the field. */
  label: string,
  /** The id for the field. */
  id: string,
	/** Number to start minimum handler on. */
	start?: number,
	/** Number to end maximum handler on. */
	end?: number,
	/** The minimum allowed value for the minimum handler. */
	min?: number,
	/** The maximum allowed value for the maximum handler. */
	max?: number,
	/** The interval number of the slider. */
	step?: number,
	/** The unit string to display behind the number labels. */
	unit?: string,
	/** The minimum range between the minimum and maximum handlers. */
	minRange?: number,
	/** Show default of tooltip labels. */
	tooltips?: boolean,
	/** Show minimum and maximum or single slider. */
	range?: boolean,
	/** Function that is triggered when a handler is dropped after sliding */
	onDragEnd?: void,
	/** Function that is continuously triggered when a handler is being dragged */
	onChange?: void,
};

type State = {
	limit: number,
	start?: number,
	end?: number,
}

class Slider extends Component<Props, State> {

	static defaultProps = {
		start: 0,
		end: 100,
		min: 0,
		max: 100,
		step: 1,
		unit: '%',
		minRange: 0,
		tooltips: false,
		range: false,
	}

  state = {
		limit: 0,
		start: this.props.start,
		end: this.props.end,
	}

	componentDidMount () {
		window.addEventListener('resize', this.handleUpdate);
		this.handleUpdate()
	}

	componentWillUnmount () {
		window.removeEventListener('resize', this.handleUpdate);
	}

	onDragEnd = () => {
		let {
			start,
			end
		} = this.state;

		const { onDragEnd } = this.props;
		if (!onDragEnd) return;
		onDragEnd && onDragEnd(start, end);
	}

	updateStart = (start) => {
		let {
			end
		} = this.state;

		let {minRange} = this.props;

		if(end - start < minRange){
			end = start + minRange;
		}

		this.onChange(start, end);
	}

	updateEnd = (end) => {
		let {
			start
		} = this.state;

		let {minRange} = this.props;

		if(end - start < minRange){
			start = end - minRange;
		}

		this.onChange(start, end);
	}

	handleUpdate = () => {
		const sliderPos = this.slider['offsetWidth'];
		const handlePos = 30; // Fills the bar up correctly on the right side

		const node = this.slider;
		const direction = node.getBoundingClientRect()['left'];

		this.setState({
			limit: sliderPos - handlePos,
			sliderPos,
			direction
		});
	}

	handleNoop = (e) => {
		e.stopPropagation();
		e.preventDefault();
	}

	onChange = (start, end) => {
		let {
			onChange
		} = this.props;

		onChange(start, end);

		this.setState({
			start, end
		});
	}

	getPositionFromValue = (value) => {
		const { limit } = this.state;
		const { min, max } = this.props;
		const diffMaxMin = max - min;
		const diffValMin = value - min;
		const percentage = diffValMin / diffMaxMin;

		return  Math.round(percentage * limit);
	}

	render(){
		let {
			id,
			label,
			min,
			max,
			step,
			unit,
			minRange,
			tooltips,
			range,
		} = this.props;

		let {
			sliderPos,
			direction,
			start,
			end
	} = this.state;

		return(
			<div id={id}>
				{label && <InputLabel htmlFor={id}>{label}</InputLabel>}
				<div className="m-range-slider" ref={(s) => { this.slider = s }}>
					<div className="m-range-slider__inner">
						<Bar
							start={start}
							end={end}
							getPositionFromValue={this.getPositionFromValue}
							range={range}
						/>

						<Handle
							value={start}
							onChange={this.updateStart}
							min={min}
							max={max - minRange}
							step={step}
							unit={unit}
							handleNoop={this.handleNoop}
							sliderPos={sliderPos}
							direction={direction}
							getPositionFromValue={this.getPositionFromValue}
							tooltips={tooltips}
							onDragEnd={this.onDragEnd}
						/>
						{range &&
							<Handle
								value={end}
								onChange={this.updateEnd}
								min={min + minRange}
								max={max}
								step={step}
								unit={unit}
								handleNoop={this.handleNoop}
								sliderPos={sliderPos}
								direction={direction}
								getPositionFromValue={this.getPositionFromValue}
								tooltips={tooltips}
								onDragEnd={this.onDragEnd}
							/>
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Slider;


