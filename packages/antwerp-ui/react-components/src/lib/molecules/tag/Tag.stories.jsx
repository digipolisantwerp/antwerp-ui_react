import Tag from './Tag';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Molecules/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component:
          'Tags are components that help filter content to the desired relevance.'
      }
    }
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'I am a Tag!',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'The `label` describes the `Tag` component.'
    },
    isToggle: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'The `isToggle` prop turns the Tag component into a toggle tag. A toggle tag always remains visible but can be toggled on or off. Toggle tags can never include a trailing icon, as they cannot be removed.'
    },
    active: {
      control: { type: 'boolean' },
      if: { arg: 'isToggle', truthy: true },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'This prop sets a toggle `Tag` component as `active`. This prop makes the `Tag` a controlled component and should be used together with `onClick`.'
    },
    iconLeft: {
      control: { type: 'select' },
      defaultValue: 'hammer-wench',
      options: [
        '',
        'tags',
        'tags-double',
        'hammer-wench',
        'headphones-customer-support-human',
        'professional-tool-dropbox'
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'A Tag component can include a leading icon.'
    },
    removable: {
      control: { type: 'boolean' },
      defaultValue: false,
      if: { arg: 'isToggle', truthy: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'A Tag component can include a trailing icon. The use of the trailing icon is reserved for an interactive icon action to remove the tag itself.'
    },
    onClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onClick',
      description:
        'Function triggered when the tag is clicked. First parameter of this function is of type `(React).MouseEvent`. Only available on tags with `isToggle` or `removable` enabled.'
    },
    qa: QA_PROP_STORY,
  }
};

export const tag = '';
