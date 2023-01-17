import DatepickerInput from './DatepickerInput';

export default {
  title: 'React/Molecules/DatepickerInput',
  component: DatepickerInput,
  parameters: {
    docs: {
      description: {
        component:
          "Use the datepicker component to assist the user in finding and selecting the desired date. This can be accomplished through simple keyboard input directly into the input field, or by finding and selecting a date from the flyout panel. To change the locale of the component import it from the moment library `import 'moment/dist/locale/nl-be'`. By default it will use `en` locale"
      }
    }
  },
  argTypes: {
    inputProps: {
      control: { type: 'object' },
      defaultValue: {},
      table: {
        defaultValue: { summary: '{}' },
        type: { summary: 'object' }
      },
      description:
        'Props that will be passed through to `TextField` component. Please check React/Atoms/Input/TextField for documentation. Available props: `id` | `label` | `description` | `disabled` | `name` | `placeholder` | `required` | `size`'
    },
    format: {
      control: { type: 'text' },
      defaultValue: 'DD/MM/YYYY',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'DD/MM/YYYY' }
      },
      description:
        'Allows to change of date format used to display the value. Should be used with corresponding `mask` and be a valid date-string format'
    },
    mask: {
      control: { type: 'text' },
      defaultValue: '99/99/9999',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '99/99/9999' }
      },
      description: 'Allows to change of the input mask. Should be used with corresponding `format`'
    },
    value: {
      control: { type: 'text' },
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' }
      },
      description:
        'The value prop of the `DatepickerInput`. Setting it makes the component controlled and preselects date in flyout Datepicker; use it in combination with `onChange`.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Function triggered when the `DatepickerInput` value has changed. The first parameter of this function is of type `string`, second is of type `boolean` which indicates if inputted date is valid.'
    },
    qa: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The `qa` prop allows to set the `data-qa` prop on the rendered HTML of the component.'
    }
  }
};

export const datepickerInput = '';
