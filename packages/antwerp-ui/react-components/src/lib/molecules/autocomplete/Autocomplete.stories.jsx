import { QA_PROP_STORY } from '../../../constants/stories.settings';
import Autocomplete from './Autocomplete';

export default {
  title: 'React/Molecules/Autocomplete',
  component: Autocomplete,
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    qa: QA_PROP_STORY
  }
};

export const autocomplete = '';
