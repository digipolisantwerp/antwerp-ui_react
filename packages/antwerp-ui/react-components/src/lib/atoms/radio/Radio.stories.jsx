import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { Radio } from './Radio';

export default {
  title: 'React/Atoms/Radios/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component:
          'The Radio component should be used as the child of a RadioGroup component. Use radio buttons when users can only select one option from a list of presented choices.'
      }
    }
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Option one',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'A label that displays next to the `Radio` button.'
    },
    checked: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'The `checked` prop is used to set the state for the `Radio` component. In normal instances, this will be passed down from the `RadioGroup` component and is used to change the selected `Radio` button.'
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'A `Radio` component can be `disabled`, barring any interaction with the control.'
    },
    autoFocus: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Set the `autofocus` attribute on the underlying `input` HTML tag.'
    },
    name: {
      control: { type: 'text' },
      defaultValue: 'radio-example',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'The `name` prop is used to group radio buttons together. In normal instances, this will be passed down from the `RadioGroup` component, where it can be left empty for the Radio component. However, if there is no `RadioGroup` component, the name will have to be passed to the `Radio` button itself.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Function triggered when the radio value is selected. The first parameter of this function is of type `(React).ChangeEvent`.'
    },
    id: {
      control: { type: 'text' },
      defaultValue: 'radio-example',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'The `id` prop is required for the Radio component. It is also used to link the label with the HTML `input` tag.'
    },
    qa: QA_PROP_STORY
  }
};

export const radio = '';
