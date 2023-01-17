import DatepickerInput from './DatepickerInput';

export default {
  title: 'React/Molecules/DatepickerInput',
  component: DatepickerInput,
  parameters: {
    docs: {
      description: {
        component:
          'Use the datepicker component to assist the user in finding and selecting the desired date. This can be accomplished through simple keyboard input directly into the input field, or by finding and selecting a date from the flyout panel.'
      }
    }
  },
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
      defaultValue: 'Datumkiezer dagen bekijken',
      table: {
        defaultValue: { summary: 'Datumkiezer dagen bekijken' },
        type: { summary: 'string' }
      },
      description: 'Used to override `aria-label` attribute on the wrapper element.'
    },
    ariaLabelPreviousMonth: {
      control: { type: 'text' },
      defaultValue: 'Ga naar de vorige maand',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ga naar de vorige maand' }
      },
      description: 'Used to override `aria-label` attribute on the `previous` button when component is in `days` view.'
    },
    ariaLabelPreviousYear: {
      control: { type: 'text' },
      defaultValue: 'Ga naar vorig jaar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ga naar vorig jaar' }
      },
      description:
        'Used to override `aria-label` attribute on the `previous` button when component is in `months` view.'
    },
    ariaLabelPreviousYears: {
      control: { type: 'text' },
      defaultValue: 'Ga naar voorgaande jaren',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ga naar voorgaande jaren' }
      },
      description: 'Used to override `aria-label` attribute on the `previous` button when component is in `years` view.'
    },
    ariaLabelNextMonth: {
      control: { type: 'text' },
      defaultValue: 'Ga naar volgende maand',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ga naar volgende maand' }
      },
      description: 'Used to override `aria-label` attribute on the `next` button when component is in `days` view.'
    },
    ariaLabelNextYear: {
      control: { type: 'text' },
      defaultValue: 'Ga naar volgend jaar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ga naar volgend jaar' }
      },
      description: 'Used to override `aria-label` attribute on the `next` button when component is in `months` view.'
    },
    ariaLabelNextYears: {
      control: { type: 'text' },
      defaultValue: 'Ga naar de volgende jaren',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ga naar de volgende jaren' }
      },
      description: 'Used to override `aria-label` attribute on the `next` button when component is in `years` view.'
    },
    unavailableFrom: {
      control: { type: 'date' },
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Set the date (`ISOString`) from which (inclusively) selection will become unavailable.'
    },
    unavailableTo: {
      control: { type: 'date' },
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Set the date (`ISOString`) untill which (inclusively) selection will become unavailable.'
    },
    unavailable: {
      control: { type: 'array' },
      defaultValue: [],
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '' }
      },
      description: 'Set the individual dates (`ISOString`) for which selection will become unavailable.'
    },
    isOpen: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
      defaultValue: true,
      description: 'Shows/hides `Datepicker` component. When used without input should be set to `true`'
    },
    value: {
      control: { type: 'text' },
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' }
      },
      description:
        'The value prop of the `Datepicker`. Setting it makes the component controlled and preselects date; use it in combination with `onChange`.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Function triggered when the `Datepicker` value has changed. The first parameter of this function is of type `string`.'
    },
    onBlur: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onBlur',
      description:
        'Function triggered when the `Datepicker` is blurred. The first parameter of this function is of type `(React).FocusEvent`.'
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
