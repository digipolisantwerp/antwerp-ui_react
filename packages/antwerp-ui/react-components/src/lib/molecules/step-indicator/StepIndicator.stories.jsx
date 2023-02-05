import StepIndicator from './StepIndicator';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Molecules/StepIndicator',
  component: StepIndicator,
  parameters: {
    docs: {
      description: {
        component:
          'The step indicator offers users a reference point whenever they have entered a process or page flow of multiple steps. It informs them on the steps already taken, the current step, but also the steps that are still to come. Users can also use the step indicator to return to a previous step.'
      }
    }
  },
  argTypes: {
    steps: {
      control: { type: 'array' },
      defaultValue: [
        { id: 'step1', complete: true, label: 'Stap 1', link: { href: '#' } },
        { id: 'step2', active: true, label: 'Stap 2 - Gegevens' },
        { id: 'step3' },
        { id: 'step4', link: { href: '#' } }
      ],
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '' }
      },
      description:
        'The `steps` prop accepts an array of objects in the following format: `{ id: "", label: "", complete: "", active: "", link: {href: "", target: ""}}}`.'
    },
    onStepClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onStepClick',
      description:
        'Function that can be used instead of default click link behavior, the two arguments of the function are the step Id and the index of the step.'
    },
    screenReaderStepLabel: {
      description: 'Steps screen reader text.',
      control: { type: 'text' },
      defaultValue: 'Stap ',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Stap ' }
      }
    },
    screenReaderCompleteLabel: {
      description: 'Complete steps screen reader text.',
      control: { type: 'text' },
      defaultValue: ' (voltooid)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' (voltooid)' }
      }
    },
    qa: QA_PROP_STORY
  }
};

export const stepIndicator = '';
