import React, { Component } from 'react';

class Handle extends Component {
  state = {
    limit: 480,
    grab: 5,
    isFocus: false
  };

  componentWillReceiveProps(nextProps) {
    let { sliderPos } = nextProps;
    const handlePos = 30; // Fills the bar up correctly on the right side

    this.setState({
      limit: sliderPos - handlePos
    });
  }

  handleNoop = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  handleStart = () => {
    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('mouseup', this.handleEnd);
  };

  handleDrag = e => {
    this.handleNoop(e);
    const { onChange } = this.props;
    if (!onChange) return;

    const value = this.position(e);
    onChange && onChange(value);
  };

  handleEnd = e => {
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleEnd);

    const { onDragEnd } = this.props;
    if (!onDragEnd) return;
    const value = this.position(e);
    onDragEnd && onDragEnd(value);
  };

  position = e => {
    const { grab } = this.state;
    const { direction } = this.props;

    const clientCoordinateStyle = 'clientX';
    const coordinate = !e.touches ? e[clientCoordinateStyle] : e.touches[0][clientCoordinateStyle];

    const pos = coordinate - direction - grab;
    return this.getValueFromPosition(pos);
  };

  getValueFromPosition = pos => {
    const { limit } = this.state;
    const { min, max, step } = this.props;
    const percentage = clamp(pos, 0, limit) / (limit || 1);
    const baseVal = step * Math.round((percentage * (max - min)) / step);

    let value = baseVal + min;

    if (value >= max) value = max;
    if (value <= min) value = min;

    return value;
  };

  handleKeyPress = e => {
    if (e.defaultPrevented) {
      return;
    }
    const { onChange, step, min, max, value } = this.props;
    if (!onChange) {
      return;
    }

    let newValue = value;
    const key = e.keyCode;
    // 39: right
    // 38: up
    // 37: left
    // 40: down
    // 35: end
    // 36: home

    switch (key) {
      case 39:
      case 38:
        newValue = value + step;
        e.preventDefault();
        break;
      case 37:
      case 40:
        newValue = value - step;
        e.preventDefault();
        break;
      case 35:
        newValue = max;
        e.preventDefault();
        break;
      case 36:
        newValue = min;
        e.preventDefault();
        break;
    }

    onChange(newValue);
  };

  onFocus = () => {
    document.addEventListener('keydown', this.handleKeyPress);
    this.setState({ isFocus: true });
  };

  onBlur = () => {
    document.removeEventListener('keydown', this.handleKeyPress);
    this.setState({ isFocus: false });
  };

  render() {
    let { value, handleNoop, getPositionFromValue, unit, fixed, tooltips, onDragEnd, min, max, label } = this.props;
    const { isFocus } = this.state;

    const valueNow = `${value.toFixed(fixed).replace(/[.]/, ',')} ${unit}`;

    return (
      <div
        className={`m-range-slider__handle ${isFocus ? 'focus' : ''}`}
        tabIndex="0"
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onMouseDown={this.handleStart}
        onTouchEnd={handleNoop}
        onTouchMove={this.handleDrag}
        onDragExit={onDragEnd}
        role="slider"
        aria-orientation="horizontal"
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={valueNow}
        aria-label={label}
        style={{
          left: getPositionFromValue(value) + 'px'
        }}
      >
        {tooltips ? (
          <div className="m-range-slider__tooltip a-tooltip a-tooltip--primary a-tooltip--top">
            <p>
              {value.toFixed(fixed).replace(/[.]/, ',')}&nbsp;{unit}
            </p>
          </div>
        ) : (
          <span className="m-range-slider__value">
            {value.toFixed(fixed).replace(/[.]/, ',')}&nbsp;{unit}
          </span>
        )}
      </div>
    );
  }
}

export default Handle;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
