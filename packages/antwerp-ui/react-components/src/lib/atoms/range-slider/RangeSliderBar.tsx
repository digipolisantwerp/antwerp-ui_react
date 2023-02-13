import { RangeSliderBarProps } from './RangeSlider.types';

export function RangeSliderBar({ start, end, range, min, getPositionFromValue }: RangeSliderBarProps) {
  return (
    <div
      className="a-range-slider__bar"
      style={{
        left: range ? getPositionFromValue(start) + 'px' : '',
        width: range && end ? getPositionFromValue(end + min - start) + 'px' : getPositionFromValue(start) + 'px'
      }}
    ></div>
  );
}

export default RangeSliderBar;
