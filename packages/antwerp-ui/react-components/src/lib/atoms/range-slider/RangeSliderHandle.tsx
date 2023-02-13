import { getPosition, getValueFromPosition } from '../../../utils/math.utils';
import React from 'react';
import { RangeSliderHandleProps } from './RangeSlider.types';

export function RangeSliderHandle({
  value,
  min,
  max,
  step,
  direction,
  sliderPos,
  onUpdate,
  getPositionFromValue,
  ariaLabel
}: RangeSliderHandleProps) {
  const [limit, setLimit] = React.useState(0);
  const handleRef = React.useRef(null);
  const GRAB = 5;

  React.useEffect(() => {
    if (sliderPos) {
      setLimit(sliderPos);
    }
  }, [direction, sliderPos]);

  const handleNoop = (e: MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleStart = () => {
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleEnd);
  };

  const handleDrag = (e: MouseEvent | React.TouchEvent) => {
    e.type === 'mousemove' ? handleNoop(e) : e.stopPropagation();
    const value = position(e);
    return onUpdate && onUpdate(value);
  };

  const handleEnd = (e: MouseEvent | React.TouchEvent) => {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleEnd);
    const value = position(e);
    return onUpdate && onUpdate(value);
  };

  const position = (e: MouseEvent | React.TouchEvent) => {
    const clientCoordinateStyle = 'clientX';
    let coordinate;
    if (e.type !== 'touchmove') {
      coordinate = (e as MouseEvent)[clientCoordinateStyle];
    } else {
      coordinate = (e as React.TouchEvent).touches[0][clientCoordinateStyle];
    }
    const pos = getPosition(coordinate, GRAB, direction);
    return getValueFromPosition(pos, limit, step, max, min);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    let newValue = value;
    if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
      e.preventDefault();
      newValue += step;
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
      e.preventDefault();
      newValue -= step;
    } else if (e.key === 'End') {
      e.preventDefault();
      newValue = max;
    } else if (e.key === 'Home') {
      e.preventDefault();
      newValue = min;
    }
    if (newValue >= min && newValue <= max) {
      onUpdate(newValue);
    }
  };
  return (
    <div
      className="a-range-slider__handle"
      tabIndex={0}
      style={{
        left: getPositionFromValue(value) + `px`
      }}
      onMouseDown={handleStart}
      onTouchEnd={handleNoop}
      onTouchMove={handleDrag}
      onKeyDown={handleKeyPress}
      role="slider"
      aria-orientation="horizontal"
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuenow={value}
      aria-label={ariaLabel}
      ref={handleRef}
    ></div>
  );
}

export default RangeSliderHandle;
