import React from 'react';
import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

export default {
  title: 'React/Atoms/Radios/Group',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          'The RadioGroup component is used in conjunction with the Radio component to provide users with selectable options. Use radio buttons when users can only select one option from a list of presented choices. Do not use radio buttons if the users need to select more than one option. In this case, use checkboxes instead.'
      }
    }
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Choose your fighter',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'An optional label for the radio button group.'
    },
    value: {
      control: { type: 'text' },
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'The value is a parameter to control the Radio that is checked within the RadioGroup componen. This prop makes the RadioGroup a controlled component and should be used together with `onChange`.'
    },
    name: {
      control: { type: 'text' },
      defaultValue: 'fighter-selection',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'The name parameter is used to group radio buttons together. Once the radio group is created, selecting any radio button in that group automatically deselects any other selected radio button in the same group. You can have as many radio groups on a page as you want, as long as each group has its own name.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' },
      },
      action: 'onChange',
      description: 'Function triggered when an option is selected. The first parameter of this function is the selected value (string).'
    },
    qa: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The qa parameter allows to set the `data-qa` prop on the rendered html of the component.'
    }
  }
};

const Template = ({ ...args }) => (
  <RadioGroup {...args}>
    <Radio value="Scorpion" label="Scorpion" id="first-option" />
    <Radio value="Raiden" label="Raiden" id="second-option" />
    <Radio value="Sub-Zero" label="Sub-Zero" id="third-option" />
    <Radio value="None" label="None" id="fourth-option" />
  </RadioGroup>
);

export const Group = Template.bind({});
