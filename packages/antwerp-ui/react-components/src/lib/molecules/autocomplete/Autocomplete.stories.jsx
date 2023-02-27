import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { Autocomplete } from './Autocomplete';

export default {
  title: 'React/Molecules/Autocomplete',
  component: Autocomplete,
  parameters: {
    docs: {
      description: {
        component: 'The `Autocomplete` component is a normal text input enhanced by a pannel of filtered suggestions.'
      }
    }
  },
  argTypes: {
    name: {
      control: { type: 'text' },
      defaultValue: 'aui-autocomplete',
      table: {
        type: { summary: 'string' }
      },
      description:
        'The `name` prop; is set on the `input` HTML element of the `Autocomplete` component. It is also returned by `onChange` and `onInputChange` to identify the component.'
    },
    items: {
      control: { type: 'array' },
      defaultValue: [
        { label: 'Acadia', value: '1' },
        { label: 'American Samoa', value: '2' },
        { label: 'Arches', value: '3' },
        { label: 'Canyonlands', value: '4' },
        { label: 'Capitol Reef', value: '5' }
      ],
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' }
      },
      description:
        'The `items` prop control the results from the dropdown in the `Autocomplete` component. These `items` are objects in the format of `{ label: "", value: "" }`.'
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'National Parcs',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'The label of the `Autocomplete` component.'
    },
    noResultsText: {
      control: { type: 'text' },
      defaultValue: 'Sorry, niet gevonden',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Geen resultaten' }
      },
      description:
        'The text when no item match the provided search term.'
    },
    inputValue: {
      table: {
        type: { summary: 'string' },
      },
      description:
        'The `inputValue` prop controls the value of the `Autocomplete` input field. This prop makes the `Autocomplete` a controlled component and should be used together with `onInputChange`.'
    },
    value: {
      table: {
        type: { summary: 'string' },
      },
      description:
        'The `value` prop controls the value of the selected `Autocomplete` item. This prop makes the `Autocomplete` a controlled component and should be used together with `onChange`.'
    },
    id: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'aui-autocomplete' }
      },
      description: 'The `id` prop; set on the `input` HTML element of the `Autocomplete` component.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: ' function' }
      },
      action: 'onChange',
      description:
        'Function triggered when selecting an option from the `Autocomplete` dropdown. The first parameter of this function is the selected value, the second parameter is the `name` of the `Autocomplete` component.'
    },
    onInputChange: {
      control: { type: 'function' },
      table: {
        type: { summary: ' function' }
      },
      action: 'onInputChange',
      description:
        'Function triggered when the input field value changes. The first parameter of this function is the input, the second parameter is the given component name.'
    },
    qa: QA_PROP_STORY
  }
};

export const autocomplete = '';
