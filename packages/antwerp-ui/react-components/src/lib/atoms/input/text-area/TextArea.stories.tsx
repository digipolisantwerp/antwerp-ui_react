import TextArea from './TextArea';

export default {
  title: 'React/Atoms/Input/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component:
          'Use an input field when the user needs to enter a string. Specifically when there is no clear selection of options, but a wide variety of possible answers. Two of the most common types of input fields are the single line text ‘input’, the multiline ‘textarea’.'
      }
    }
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Enter your name',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' }
      },
      description:
        'A `TextArea` features at least a name label atop or to the left side of a container that itself contains an input. '
    },
    description: {
      control: { type: 'text' },
      defaultValue: 'Description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'The `description` prop adds a description or hint text between the label and the `TextArea`.'
    },
    value: {
      control: { type: 'text' },
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' }
      },
      description:
        'The value prop of the `TextArea`. Setting it makes the component controlled; use it in combination with `onChange`.'
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'When an input field is disabled, the container takes on a light grey fill, while the enclosed form inputs and add-ons are also rendered in lighter, muted greys without any interaction.'
    },
    readOnly: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Makes the `TextArea` read-only.'
    },
    inline: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'With the `inline` prop the `TextArea` will not use the full width of the parent container.'
    },
    required: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'The `required` prop adds a red asterix to the `TextArea` label and adds the required attribute to the HTML textarea field.'
    },
    charCounter: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'When the `maxLength` prop is set, the `charCounter` prop adds a character counter under the `TextArea`.'
    },
    maxLength: {
      control: { type: 'number' },
      table: {
        type: { summary: 'integer' }
      },
      description: 'The `maxLength` attribute sets a character limitation for the value of the `TextArea`.'
    },
    state: {
      control: { type: 'select' },
      options: ['', 'error', 'success'],
      table: {
        type: { summary: 'select' }
      },
      description:
        'Whenever an input field is associated with a success or error state, the border of the container will match to that thematic colour as well as display the message above the container together with an identifiable icon.'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: 'select' }
      },
      description: 'The `size` prop allows different size variants (in height) of the `TextArea`.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Function triggered when the `TextArea` value has changed. The first parameter of this function is of type `(React).ChangeEvent`.'
    },
    onClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onClick',
      description:
        'Function triggered when the `TextArea` is clicked. The first parameter of this function is of type `(React).MouseEvent`.'
    },
    onBlur: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onBlur',
      description:
        'Function triggered when the `TextArea` is blurred. The first parameter of this function is of type `(React).FocusEvent`.'
    },
    onFocus: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onFocus',
      description:
        'Function triggered when the `TextArea` is focused. The first parameter of this function is of type `(React).FocusEvent`.'
    },
    onKeyDown: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onKeyDown',
      description:
        'Function triggered when the user presses a key inside the `TextArea`. The first parameter of this function is of type `(React).KeyboardEvent`.'
    },
    qa: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The `qa` prop allows to set the `data-qa` prop on the rendered HTML of the component.'
    },
    id: {
      control: { type: 'text' },
      defaultValue: 'textfield-story',
      table: {
        type: { summary: 'string' }
      },
      description: 'The `id` prop; set on the `textarea` HTML element.'
    },
    name: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The `name` prop; set on the `textarea` HTML element.'
    }
  }
};

export const textArea = '';
