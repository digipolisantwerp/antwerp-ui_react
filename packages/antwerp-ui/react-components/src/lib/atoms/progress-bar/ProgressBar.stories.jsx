import ProgressBar from './ProgressBar';
import { QA_PROP_STORY } from '../../../constants/stories.settings';


export default {
  title: 'React/Atoms/ProgressBar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component:
          "A progress indicator communicates to the user that they have to wait for a page, element of functionality to complete loading or processing a task before they can access it."
      }
    }
  },
  argTypes: {
    percentage: {
      control: { type: 'number' },
      defaultValue: 10,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      },
      description: 'Current width in percentage; value from 0 to 100.'
    },
    large: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      defaultValue: false,
      description: 'Set the size of the bar to `large`.'
    },
    label: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      defaultValue: 'Downloading...',
      description: 'Label of the progress bar.'
    },
    absoluteValue: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
      },
      description: 'Use this prop to override the `aria-valuenow`, if not set the `percentage` prop is used.'
    },
    minValue: {
      control: { type: 'number' },
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      },
      description: 'Use this prop to set the `aria-valuemin` attribute.'
    },
    maxValue: {
      control: { type: 'number' },
      defaultValue: 100,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 }
      },
      description: 'Use this prop to set the `aria-valuemax` attribute.'
    },
    qa: QA_PROP_STORY
  },

};

export const progressBar = '';
