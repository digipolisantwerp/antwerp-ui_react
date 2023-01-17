import { QA_PROP_STORY } from '../../../../constants/stories.settings';
import TextField from './TextField';

export default {
  title: 'React/Atoms/Input/TextField',
  component: TextField,
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
        'A `TextField` features at least a name label atop or to the left side of a container that itself contains an input. '
    },
    description: {
      control: { type: 'text' },
      defaultValue: 'Description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'The `description` prop adds a description or hint text between the label and the `TextField`.'
    },
    type: {
      control: { type: 'select' },
      defaultValue: 'text',
      options: [
        'date',
        'datetime-local',
        'email',
        'month',
        'number',
        'password',
        'search',
        'tel',
        'text',
        'time',
        'url',
        'week'
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' }
      },
      description:
        'Both in web and native apps it is very important to use the correct input type for your field. These input types allow better input control and validation.'
    },
    value: {
      control: { type: 'text' },
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' }
      },
      description:
        'The value prop of the `TextField`. Setting it makes the component controlled; use it in combination with `onChange`.'
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
      description: 'Makes the `TextField` read-only.'
    },
    inline: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'With the `inline` prop the `TextField` will not use the full width of the parent container.'
    },
    required: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'The `required` prop adds a red asterix to the `TextField` label and adds the required attribute to the HTML input field.'
    },
    charCounter: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'When the `maxLength` prop is set, the `charCounter` prop adds a character counter under the `TextField`.'
    },
    maxLength: {
      control: { type: 'number' },
      table: {
        type: { summary: 'integer' }
      },
      description: 'The `maxLength` attribute sets a character limitation for the value of the `TextField`.'
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
      description: 'The `size` prop allows different size variants (in height) of the `TextField`.'
    },
    iconLeft: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      description:
        'Set this prop to use an icon as a leading add-on inside the `TextField` (icon name can be used with or without `ai`-prefix).',
      options: ['', 'archive', 'add', 'check-1', 'close']
    },
    iconRight: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      description:
        'Set this prop to use an icon as a trailing add-on inside the `TextField` (icon name can be used with or without `ai`-prefix).',
      options: ['', 'archive', 'add', 'check-1', 'close']
    },
    addonLeft: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description:
        'Leading add-ons for the `TextField`, clarifying text such as a currency notation or unit of measure.'
    },
    addonRight: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description:
        'Trailing add-ons for the `TextField`, clarifying text such as a currency notation or unit of measure.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Function triggered when the `TextField` value has changed. The first parameter of this function is of type `(React).ChangeEvent`.'
    },
    onClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onClick',
      description:
        'Function triggered when the `TextField` is clicked. The first parameter of this function is of type `(React).MouseEvent`.'
    },
    onBlur: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onBlur',
      description:
        'Function triggered when the `TextField` is blurred. The first parameter of this function is of type `(React).FocusEvent`.'
    },
    onFocus: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onFocus',
      description:
        'Function triggered when the `TextField` is focused. The first parameter of this function is of type `(React).FocusEvent`.'
    },
    onKeyDown: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onKeyDown',
      description:
        'Function triggered when the user presses a key inside the `TextField`. The first parameter of this function is of type `(React).KeyboardEvent`.'
    },
    qa: QA_PROP_STORY,
    id: {
      control: { type: 'text' },
      defaultValue: 'textfield-story',
      table: {
        type: { summary: 'string' }
      },
      description: 'The `id` prop; set on the `input` HTML element.'
    },
    name: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The `name` prop; set on the `input` HTML element.'
    }
  }
};

export const textField = '';
