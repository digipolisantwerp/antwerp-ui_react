import { useState } from 'react';
import Toggle from './Toggle';

export default {
  title: 'React/Atoms/Toggle',
  component: Toggle,
  argTypes: {
    id: {
      control: { type: 'text' },
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' }
      },
      defaultValue: '',
      description: 'ID for `Toggle` component.'
    },
    checked: {
      control: { type: 'boolean', disable: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      defaultValue: false,
      description: 'Toggles between the two toggle states.'
    },
    showLabels: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
      defaultValue: true,
      description: 'Controls if labels are shown or not.'
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['', 'small', 'large'],
      defaultValue: '',
      description: 'Sets the size of the component. Can be omitted for medium.'
    },
    checkedLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      defaultValue: 'Open',
      description: 'Text in checked state label.'
    },
    uncheckedLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      defaultValue: 'Close',
      description: 'Text in unchecked state label.'
    },
    checkedIcon: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'navigation-menu' }
      },
      defaultValue: 'navigation-menu',
      description: 'Icon in checked state.'
    },
    uncheckedIcon: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'close' }
      },
      defaultValue: 'close',
      description: 'Icon in unchecked state.'
    },
    checkedTheme: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['', 'primary', 'success', 'warning', 'danger'],
      defaultValue: '',
      description: 'Theme of the button in checked state.'
    },
    uncheckedTheme: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['', 'primary', 'success', 'warning', 'danger'],
      defaultValue: 'danger',
      description: 'Theme of the button in unchecked state.'
    },
    onClick: {
      table: {
        type: { summary: 'function' }
      },
      description: 'Click handler, (checked: boolean) => void.'
    },
    qa: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The qa prop allows to set the `data-qa` attribute on the rendered HTML of the component.'
    }
  },
  parameters: {}
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return (
    <Toggle
      {...args}
      onClick={(...params) => {
        args.onClick(...params);
        setChecked(...params);
      }}
      checked={checked}
    />
  );
};

export const toggle = Template.bind({});
