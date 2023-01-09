import Checkbox from './Checkbox';

export default {
  title: 'React/Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'I agree',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'The checkbox component has an optional label parameter that is shown next to the checkbox.'
    },
    checked: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'Checked state. When this parameter is set, the Checkbox becomes a controlled component.'
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        "A checkbox can have the disabled attribute. This will make it so the checkbox cannot be interacted with, and it's state cannot be change by the user."
    },
    indeterminate: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        "Whenever a checkbox is used to reflect a(n) '(un)select all'-type of behaviour for a group of components or other checkboxes, a third indeterminate-state is added."
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' },
      },
      action: 'onChange',
      description: 'Function triggered when the checkbox value has changed. First parameter of this function is of type (React) ChangeEvent.'
    },
    id: {
      control: { type: 'text' },
      defaultValue: 'checkbox-example',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'The id parameter is required for the Checkbox component. It is used to link the label with the input tag.'
    },
    name: {
      control: { type: 'text' },
      defaultValue: 'agree-checkbox',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        "The checkbox component's name parameter. The name attribute in a checkbox is used to reference form data after it's submitted, and to reference the data on the client side."
    },
    qa: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The qa parameter allows to set the `data-qa` prop on the rendered html of the component.'
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A checkbox allows for a user to select one or more explicit options from a list. They are ideal for allowing the selection of multiple options (for example for batch operations) or simply to provide a clear opt-in or opt-out decision. When there is a list of two or more options that are mutually exclusive and the user must select exactly one choice, then use radio buttons instead of checkboxes. Never combine a checkbox with a label containing other elements apart from text. For instance do not use text links in the label of a checkbox.'
      }
    }
  }
};

export const checkbox = '';

