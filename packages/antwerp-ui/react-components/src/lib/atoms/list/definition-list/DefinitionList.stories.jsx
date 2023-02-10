import DefinitionList from './DefinitionList';
import { QA_PROP_STORY } from '../../../../constants/stories.settings';

export default {
  title: 'React/Atoms/List/DefinitionList',
  component: DefinitionList,
  parameters: {
    docs: {
      description: {
        component:
          'The definition list is a component that can be used to list terms or definitions, together with their respective descriptions. It can be used to explain complicated jargon.'
      }
    }
  },
  argTypes: {
    items: {
      control: { type: 'array' },
      defaultValue: [
        {term: 'Hello', description: 'World'},
        {term: 'Term', description: 'Term description'},
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: {summary: []}
      },
      description: 'Items of the definition list. Array of objects `{term: "string", description: "string"}`.'
    },
    qa: QA_PROP_STORY}
};

export const definitionList = '';
