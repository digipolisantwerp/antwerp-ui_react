import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { Avatar } from '../avatar';
import Button from './Button';

export default {
  title: 'React/Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Buttons are the primary call-to-action components by which we allow users to take action. Buttons are used for actions that affect the front-end or back-end.'
      }
    }
  },
  argTypes: {
    id: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The `id` attribute of the rendered HTML button.'
    },
    title: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The `title` attribute of the rendered HTML button.'
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      options: ['small', 'medium', 'large'],
      description: 'Set the size of the button, `medium` is the default and can be omitted.'
    },
    emphasis: {
      control: { type: 'select' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'high' }
      },
      options: ['high', 'medium', 'low'],
      description: 'Set the button emphasis to high (default type), medium (outlined type) or low (transparent type).'
    },
    theme: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      },
      description:
        'Buttons can also be themed to reflect the context in which they are being use. (High emphasis buttons are not available in the neutral theme).',
      options: ['primary', 'success', 'warning', 'danger', 'neutral']
    },
    fullWidth: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      defaultValue: false,
      description: 'The button can have a scalable width and take up the full width of the parent container.'
    },
    addOn: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      },
      description:
        'Set the add-on inside the button. The `addOn` prop is an object with following fields _{type: "avatar" | "icon" | "spinner", align?: "left" | "center" | "right", avatarProps?: AvatarProps, iconProps?: IconProps }_'
    },
    onClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'clicked',
      description: 'Function that is triggered when the button is clicked.'
    },
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode | string' }
      },
      defaultValue: 'Click me',
      description: 'React Node(s) inside the button component.'
    },
    htmlType: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' }
      },
      description: 'The (HTML) type of the button. Can be `button`, `submit` or `reset`.',
      options: ['button', 'submit', 'reset']
    },
    ariaLabel: {
      table: {
        type: { summary: 'string' }
      },
      control: { type: 'text' },
      description: 'The `ariaLabel` describes an accessible name for the avatar component. Required for icon buttons.'
    },
    qa: QA_PROP_STORY
  }
};

export const button = '';
