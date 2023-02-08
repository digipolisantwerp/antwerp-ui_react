import { QA_PROP_STORY } from '../../../constants/stories.settings';
import NavigationList from './NavigationList';

export default {
  title: 'React/Molecules/NavigationList',
  component: NavigationList,
  parameters: {
    docs: {
      description: {
        component:
          'This type of navigation can be used when you need to both inform and instruct the user on their current location and how to navigate to related pages.'
      }
    }
  },
  argTypes: {
    direction: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' }
      },
      description: 'Navigation lists can be configured as a vertical list or alternatively as a horizontal tab list.',
      options: ['', 'horizontal', 'vertical']
    },
    ariaLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Navigatie' }
      },
      description: 'The `aria-label` used for the navigation list.'
    },
    border: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      },
      defaultValue: false,
      description:
        'When using a horizontal navigation list, the `hasBorder` property will add a border to the bottom.'
    },
    onItemClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onItemClick',
      description:
        'Function triggered when clicking on an item. The parameters are the id (string) and position (number) of the navigation list item.'
    },
    items: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      },
      defaultValue: [
        { id: 'item-overview', label: 'Overzicht', active: true },
        { id: 'item-attachments', label: 'Bijlagen' },
        { id: 'item-locations', label: 'Locaties' },
        { id: 'item-communications', label: 'Communicatie', disabled: true }
      ],
      description: 'The items of the `NavigationList` component. Navigation list items have following fields: id, label, href, active and disabled.'
    },
    qa: QA_PROP_STORY
  }
};

export const navigationList = '';
