import { useState } from 'react';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import RangeSlider from './RangeSlider';


//   tickMarks,
export default {
  title: 'React/Atoms/RangeSlider',
  component: RangeSlider,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Price',
      table: {
        type: { summary: 'string' }
      },
      description: 'A label that displays above the `RangeSlider`. '
    },
    start: {
      control: false,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      },
      description:
        'The `start` prop sets the value for the left handle if the `range` prop is set to `true`. If the `range` prop is set to `false`, the `start` prop sets the starting value of the single handle instead.'
    },
    end: {
      control: false,
      table: {
        type: { summary: 'number' },
      },
      description: 'The `end` prop sets the value for the right handle if the `range` prop is set to `true`.'
    },
    min: {
      control: { type: 'number' },
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      },
      description: 'The `min` prop controls the minimum value for the handle(s) on a `RangeSlider`.'
    },
    max: {
      control: { type: 'number' },
      defaultValue: 20,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 }
      },
      description: 'The `max` prop controls the maximum value for the handle(s) on a `RangeSlider`.'
    },
    step: {
      control: { type: 'number' },
      defaultValue: 1,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      },
      description: 'The `step` prop controls with what increment a handle can be increased or decreased.'
    },
    unit: {
      control: { type: 'text' },
      defaultValue: '$',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'The `unit` is a a suffix added after the numeric value(s).'
    },
    range: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Setting `range` to `true` will add a second handle on the slider.'
    },
    minRange: {
      control: { type: 'number' },
      defaultValue: 1,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      },
      description:
        'The `minRange` controls the minimum difference in values between `start` and `end`. For instance, a minRange of 2 means that `end` will always have a value of at least `start + 2`. Works only if `range` is `true`.'
    },
    labelStart: {
      control: { type: 'text' },
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Label at the start of the slider.'
    },
    labelEnd: {
      control: { type: 'text' },
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Label at the end of the slider.'
    },
    iconStart: {
      control: { type: 'select' },
      options: ['', 'ai-accounting-bill', 'volume-control-off', 'arrow-left-1'],
      defaultValue: 'ai-accounting-bill',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Icon at the start of the slider.'
    },
    iconEnd: {
      control: { type: 'select' },
      options: ['', 'ai-accounting-bills', 'volume-control-full', 'arrow-right-1'],
      defaultValue: 'ai-accounting-bills',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Icon at the end of the slider.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Function triggered when the start or end value is updated. The first parameter of this function is the new `start` value, the second parameter is the new `end` value (can be `undefined` if range is set to `false`).'
    },
    ariaLabelMin: {
      control: { type: 'text' },
      defaultValue: 'Minimum',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Minimum' }
      },
      description: 'Aria-label on the `start` handle of the slider.'
    },
    ariaLabelMax: {
      control: { type: 'text' },
      defaultValue: 'Maximum',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Maximum' }
      },
      description: 'Aria-label on the `end` handle of the slider.'
    },
    tickMarks: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Show tickmarks on the `RangeSlider`.'
    },
    qa: QA_PROP_STORY
  }
};



const Template = ({ ...args }) => {
  const [handleStartValue, setHandleStartValue] = useState(5);
  const [handleEndValue, setHandleEndValue] = useState(12);

  const handleChange = (start, end) => {
    setHandleStartValue(start);
    setHandleEndValue(end);
  };

  return <RangeSlider
    {...args}
    onChange={(start, end) => {
      handleChange(start, end);
      args.onChange(start,end);
    }}
    start={handleStartValue}
    end={handleEndValue}
  />
};

export const rangeSlider = Template.bind({});
