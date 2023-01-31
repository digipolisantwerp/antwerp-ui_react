import Tag from '../../molecules/tag/Tag';
import TagList from './TagList';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Organisms/TagList',
  component: TagList,
  parameters: {
    docs: {
      description: {
        component:
          'The tag list component shows a collection of one or multiple tags, that are in one way or another related to each other or to the context they are placed next to.'
      }
    }
  },
  argTypes: {
    children: {
      table: {
        type: { summary: 'ReactNode[]' },
        description: 'The children of a `TagList` component are `Tag` components.'
      },
    },
    qa: QA_PROP_STORY
  }
};

const Template = ({ ...args }) => (
  <TagList {...args}>
    <Tag label="Hello 1" iconLeft="tags" />
    <Tag label="Hello 2" toggle iconLeft="tags" />
    <Tag label="Hello 3" iconLeft="tags"  />
  </TagList>
);

export const tagList = Template.bind({});
