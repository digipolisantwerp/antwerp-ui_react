import FunctionalList from './FunctionalList';
import { QA_PROP_STORY } from '../../../../constants/stories.settings';
import ListItem from '../items/ListItem';
import ListItemAvatar from '../items/ListItemAvatar';
import ListItemCheckbox from '../items/ListItemCheckbox';

export default {
  title: 'React/Atoms/List/FunctionalList',
  component: FunctionalList,
  parameters: {
    docs: {
      description: {
        component:
          'Use lists to better organise the text. A list breaks the information into manageable chunks, making the text easier to read for the user.'
      }
    }
  },
  argTypes: {
    type: {
      control: false,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      defaultValue: '',
      description:
        'Set the type of list to `avatar` or `checkbox`. This transforms the `FunctionalList` in an avatar list or checkbox list. The components `AvatarList` and `CheckboxList` can be used as syntactic sugar.'
    },
    ordered: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'The ordered prop switches the default unordered list to an ordered list.'
    },
    lined: {
      control: { type: 'boolean' },
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'The `lined` prop add lines between the items of a list.'
    },
    flushed: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'The `flushed` prop removes the top and bottom lines of a lined list. '
    },
    children: {
      control: false,
      defaultValue: [
        <ListItem name="first" active link={{ href: '#' }}>
          First active item
        </ListItem>,
        <ListItem name="second" iconLeft="mouse" iconRight="arrow-right-1" link={{ href: '#' }}>
          Second clickable item
        </ListItem>,
        <ListItem name="third">Third item</ListItem>
      ],
      table: {
        type: { summary: 'ReactElement[]' }
      },
      description:
        'A functional list can accept three types of children: `ListItem`, `ListItemAvatar` or `ListItemCheckbox`. Depending on what sort of children you use in the functional list, use the correct `type` prop.'
    },
    onItemClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onItemClick',
      description:
        'Function triggered when a list item is clicked. First parameter of this function the `name` prop of the `ListItem`. It can be overriden by `onClick` prop on the item self.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = ({ ...args }) => <FunctionalList {...args}></FunctionalList>;

export const functionalList = '';

export const AvatarList = Template.bind({});
AvatarList.args = {
  children: [
    <ListItemAvatar
      name="albert"
      user={{ name: 'Albert Einstein' }}
      avatar={{ letter: 'AE' }}
      active
      iconRight="navigation-menu-horizontal"
    />,
    <ListItemAvatar
      name="dog"
      user={{ name: 'A dog', function: 'Dog', email: 'dog@antwerpen.be' }}
      avatar={{ image: 'https://placedog.net/100/100?r' }}
      iconRight="navigation-menu-horizontal"
    />,
    <ListItemAvatar
      name="isaac"
      avatar={{ letter: 'IN' }}
      link={{ href: '#' }}
      user={{ name: 'Isaac Newton', email: 'isaac.newton@antwerpen.be' }}
      iconRight="navigation-menu-horizontal"
    />
  ],
  type: 'avatar'
};
export const CheckboxList = Template.bind({});
CheckboxList.args = {
  children: [
    <ListItemCheckbox name="checkbox-1" id="checkbox-1" label="First item" />,
    <ListItemCheckbox name="checkbox-2" id="checkbox-2" label="Second item" />
  ],
  type: 'checkbox'
};
