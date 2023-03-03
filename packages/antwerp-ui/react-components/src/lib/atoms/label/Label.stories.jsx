import Label from './Label';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Atoms/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component:
          'A label is a small alphabetical (letters only) label component that accompanies other elements, such as text in tables, lists, etc. and is primarily used to indicate a status associated with the accompanying element.'
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['', 'primary', 'success', 'warning', 'danger'],
      defaultValue: '',
      description: 'Sets the type for the component. Can be omitted for default.'
    },
    children: {
      control: 'text',
      table: { type: { summary: 'string' } },
      defaultValue: 'default label',
      description: 'Sets the label text.'
    },
    qa: QA_PROP_STORY
  }
};

export const label = '';
