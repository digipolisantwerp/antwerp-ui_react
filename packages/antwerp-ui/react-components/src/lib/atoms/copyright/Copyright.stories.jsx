import Copyright from './Copyright';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Molecules/Image/Copyright',
  component: Copyright,
  parameters: {
    docs: {
      description: {
        component:
          "A copyright component provides a visually distinctive method for displaying information related to a copyright notice. Always use it when copyright information legally needs to be shown. When there is no legal obligation for the copyright information to be shown. Only use the `Copyright` component within the `Image` component."
      }
    }
  },
  argTypes: {
    sign: {
      control: { type: 'text' },
      defaultValue: '©',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '©' }
      },
      description: 'The `sign` prop should be any of the copyright symbols: ©, ®, ™, etc.'
    },
    label: {
      control: { type: 'text' },
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'The label is a descriptive notice clarifying what the copyright is in regards to, the rights, and the copyright holder(s).'
    },
    link: {
      control: { type: 'text' },
      table: {
        type: { summary: 'url' }
      },
      description:
        'A `Copyright` component can have a url passed in the `link` prop in order to make it an anchor element.'
    },
    forImage: {
      control: { type: 'boolean', disable: true },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
      description: 'Indicates if the Copyright is inside an image, only use the `Copyright` component within the `Image` component.'
    },
    qa: QA_PROP_STORY
  }
};

export const copyright = '';
