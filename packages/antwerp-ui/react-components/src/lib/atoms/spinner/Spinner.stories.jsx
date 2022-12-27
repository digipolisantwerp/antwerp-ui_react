import Spinner from './Spinner';

export default {
  title: 'React/Atoms/Spinner',
  component: Spinner,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Wordt geladen...',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Wordt geladen...' }
      },
      description: 'The label describes an (accessible) name for the spinner. This label is visible if `showText` is set to `true`.'
    },
    showText: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'Controls whether the label parameter should be used as a visual element or as a screen reader only element.'
    },
    size: {
      control: { type: 'select' },
      options: ['', 'small', 'medium', 'large'],
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Sets the size for the component. Can be omitted for medium.'
    },
    vertical: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Controls whether the component and its text should be stacked vertically.'
    },
    qa: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
      description: 'The qa parameter allows to set the `data-qa` prop on the rendered html of the component.',
    }
  },
  parameters: {}
};

export const spinner = '';
