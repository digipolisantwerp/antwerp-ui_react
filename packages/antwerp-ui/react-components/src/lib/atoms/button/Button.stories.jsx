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
      description: 'The id attribute of the button.'
    },
    title: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The title attribute of the button.'
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      options: ['small', 'medium', 'large'],
      description: 'Set the size of the button, `medium` is the default and can be omitted.'
    },
    outline: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      defaultValue: false,
      description: 'Set button style to outlined. This type of button can be used as a medium emphasis button.'
    },
    transparent: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      defaultValue: false,
      description:
        'Set button style to text button. This type of button can be used as a low emphasis button.'
    },
    theme: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
      },
      description: 'Buttons can also be themed to reflect the context in which they are being use. (High emphasis buttons are not available in the neutral theme).',
      options: ['', 'success', 'warning', 'danger', 'neutral'],
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
    icon: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
      },
      description:
        'Set icon attribute to use as a stand-alone icon button (icon name can be used with or without `ai`-prefix).',
      options: ['', 'archive', 'add', 'check-1', 'close'],
    },
    iconLeft: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
      },
      description:
        'Set this attribute to use an icon as a leading add-on inside the button (icon name can be used with or without `ai`-prefix).',
        options: ['', 'archive', 'add', 'check-1', 'close'],

    },
    iconRight: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
      },
      description:
        'Set this attribute to use an icon as a trailing add-on inside the button (icon name can be used with or without `ai`-prefix).',
      options: ['', 'archive', 'add', 'check-1', 'close'],
    },
    avatar: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' },
      },
      component: Avatar,
      description:
        'Set this attribute to use an avatar as a leading add-on inside the button. The object properties can be found in the Avatar component.'
    },
    spinner: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'Set this attribute to use a spinner as a trailing add-on inside the button. This can be used to indicate loading state.'
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
      options: ['button', 'submit', 'reset'],
    },
    ariaLabel: {
      table: {
        type: { summary: 'string' }
      },
      control: { type: 'text' },
      description: 'The ariaLabel describes an accessible name for the avatar component.'
    },
    qa: {
      table: {
        type: { summary: 'string' }
      },
      control: { type: 'text' },
      description: 'The qa parameter allows for an identification to be given to the component.'
    }
  }
};

export const button = '';
