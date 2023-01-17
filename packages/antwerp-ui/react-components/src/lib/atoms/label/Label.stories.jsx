import Label from './Label';
import {QA_PROP_STORY} from '../../../constants/stories.settings';

export default {
  title: 'React/Atoms/Label',
  component: Label,
  argTypes: {
    theme: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['', 'primary', 'success', 'warning', 'danger'],
      defaultValue: '',
      description: 'Sets the theme for the component. Can be omitted for default.'
    },
    children: {
      control: 'text',
      table: { type: { summary: 'string' } },
      defaultValue: 'default label',
      description: 'Sets the label text.'
    },
    qa: QA_PROP_STORY
  },
  parameters: {}
};

export const label = '';
