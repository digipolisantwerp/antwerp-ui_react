import jest from 'jest-mock';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RangeSlider } from './RangeSlider';
import RangeSliderHandle from './RangeSliderHandle';

describe('UI Components - Atoms - Slider', () => {
  const defaultProps = {
    min: 0,
    max: 10,
    start: 2,
    step: 1,
    label: 'Slider'
  };

  it('should render successfully', () => {
    const { baseElement } = render(<RangeSlider {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with minRange and range set to false', () => {
    const { baseElement } = render(<RangeSlider {...defaultProps} range={false} minRange={false} />);
    expect(baseElement).toBeTruthy();
  });

  it('should add unit if the unit prop is passed', () => {
    const { baseElement } = render(<RangeSlider {...defaultProps} unit="percent" />);
    expect(baseElement.textContent).toContain('percent');
  });

  it('should add labels and icons if labelStart, labelEnd, iconStart and/or iconEnd is passed', () => {
    const { baseElement, queryByText } = render(
      <RangeSlider
        {...defaultProps}
        labelStart="start"
        labelEnd="end"
        iconStart="volume-control-off"
        iconEnd="volume-control-full"
      />
    );
    expect(queryByText('start')).toBeInTheDocument();
    expect(queryByText('end')).toBeInTheDocument();
    expect(baseElement.getElementsByClassName('ai-volume-control-off').length).toBe(1);
    expect(baseElement.getElementsByClassName('ai-volume-control-full').length).toBe(1);
  });

  it('should call onChange when arrow keys are pressed', () => {
    const mockOnChange = jest.fn();
    const { getAllByRole } = render(<RangeSlider {...defaultProps} onChange={mockOnChange} start={2} end={5} />);
    const handleStart = getAllByRole('slider')[0];
    handleStart.focus();
    fireEvent.keyDown(handleStart, { key: 'ArrowLeft', code: 37 });
    const handleEnd = getAllByRole('slider')[1];
    handleEnd.focus();
    fireEvent.keyDown(handleEnd, { key: 'ArrowRight', code: 37 });
    expect(mockOnChange).toHaveBeenCalledTimes(2);
  });

  it('should not call onChange when it is not provided', () => {
    const { baseElement, getAllByRole } = render(<RangeSlider {...defaultProps} range start={2} end={5} />);
    const handleStart = getAllByRole('slider')[0];
    handleStart.focus();
    fireEvent.keyDown(handleStart, { key: 'ArrowLeft', code: 37 });
    const handleEnd = getAllByRole('slider')[0];
    handleEnd.focus();
    fireEvent.keyDown(handleEnd, { key: 'ArrowRight', code: 37 });
    expect(baseElement).toBeTruthy();
  });

  it('should render a second Handle when range, minRange and end props are passed', () => {
    const { baseElement } = render(<RangeSlider {...defaultProps} range minRange={1} end={5} />);
    expect(baseElement.getElementsByClassName('a-range-slider__handle').length).toBe(2);
  });

  it('calls the onChange function when start/end handle is moved', () => {
    const mockOnChange = jest.fn();
    const { getAllByRole } = render(
      <RangeSlider {...defaultProps} onChange={mockOnChange} range minRange={1} end={5} />
    );

    const startHandle = getAllByRole('slider')[0];
    const endHandle = getAllByRole('slider')[1];

    fireEvent.mouseDown(startHandle);
    fireEvent.mouseMove(startHandle, { clientX: 0 });
    fireEvent.mouseUp(startHandle);
    expect(mockOnChange).toHaveBeenCalled();

    fireEvent.mouseDown(endHandle);
    fireEvent.mouseMove(endHandle, { clientX: 100 });
    fireEvent.mouseUp(endHandle);
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should not call onChange if end - start value is less than minRange', () => {
    const mockOnChange = jest.fn();
    const { getAllByRole } = render(
      <RangeSlider {...defaultProps} onChange={mockOnChange} range minRange={2} end={4} />
    );
    const endHandle = getAllByRole('slider')[1];
    endHandle.focus();
    fireEvent.keyDown(endHandle, { key: 'ArrowLeft', code: 37 });
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('should not call onChange if end - start value is less than minRange', () => {
    const mockOnChange = jest.fn();
    const { getAllByRole } = render(
      <RangeSlider {...defaultProps} onChange={mockOnChange} range minRange={2} end={4} />
    );
    const startHandle = getAllByRole('slider')[0];
    startHandle.focus();
    fireEvent.keyDown(startHandle, { key: 'ArrowRight', code: 38 });
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  describe('UI Components - Atoms - RangeSliderHandle', () => {
    const mockOnUpdate = jest.fn();
    const mockGetPositionFromValue = jest.fn(() => 50);
    const defaultProps = {
      value: 2,
      min: 0,
      max: 10,
      step: 1,
      onUpdate: mockOnUpdate,
      getPositionFromValue: mockGetPositionFromValue
    };

    it('should render successfully', () => {
      const { baseElement } = render(<RangeSliderHandle {...defaultProps} />);
      expect(baseElement).toBeTruthy();
    });

    it('renders the handle component with default props', () => {
      const { container } = render(<RangeSliderHandle {...defaultProps} />);
      expect(container.firstChild).toHaveStyle({ left: '50px' });
    });

    it('invokes onUpdate with new value on touch move', () => {
      const { container } = render(<RangeSliderHandle {...defaultProps} />);
      fireEvent.touchMove(container.firstChild as Element, {
        touches: [{ clientX: 55 }]
      });
      expect(mockOnUpdate).toHaveBeenCalled();
    });

    it('invokes onUpdate with new value on mouse move', () => {
      const { container } = render(<RangeSliderHandle {...defaultProps} />);
      fireEvent.mouseMove(container.firstChild as Element, { clientX: 55 });
      expect(mockOnUpdate).toHaveBeenCalled();
    });

    it('invokes onUpdate with new value on keyDown', () => {
      const { container } = render(<RangeSliderHandle {...defaultProps} />);
      fireEvent.keyDown(container.firstChild as Element, { key: 'ArrowUp' });
      expect(mockOnUpdate).toHaveBeenCalled();
    });

    it('should handle Home and End key presses correctly', () => {
      const { container } = render(<RangeSliderHandle {...defaultProps} value={-1} />);
      fireEvent.keyDown(container.firstChild as Element, { key: 'Home', code: 36 });
      expect(mockOnUpdate).toHaveBeenCalledWith(0);
      fireEvent.keyDown(container.firstChild as Element, { key: 'End', code: 35 });
      expect(mockOnUpdate).toHaveBeenCalledWith(10);
    });

    it('sets limit if sliderPos is passed as prop', () => {
      const { rerender } = render(<RangeSliderHandle {...defaultProps} direction={2} />);
      rerender(<RangeSliderHandle {...defaultProps} sliderPos={5} />);
    });
  });
});
