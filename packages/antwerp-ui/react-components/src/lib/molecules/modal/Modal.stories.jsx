import Modal from './Modal';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { Button } from '../../atoms/button';

export default {
  title: 'React/Molecules/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          'Use a modal to focus the user’s attention on a single task or message while disabling the page content.'
      }
    }
  },
  argTypes: {
  // onAfterOpen?: () => void;
  // onClose?: () => void;

    appRootId: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      defaultValue: 'root',
      description: 'It is important for users of screenreaders that other page content be hidden (via the `aria-hidden `attribute) while the modal is open. To allow the component to do this, the application root ID should be provided.'
    },
    ariaCloseLabel: {
      control: { type: 'text' },
      description: 'Add `aria-label` for the close button.',
      defaultValue: 'Sluiten',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Sluiten' }
      }
    },
    children: {
      control: {
        type: 'text'
      },
      description: 'Content of the `Modal` component.',
      defaultValue: 'Hello this is the content of the modal.',
      table: {
        type: { summary: 'ReactNode' },
      }
    },
    closeButton: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
      defaultValue: true,
      description: 'Hide/show the close button.'
    },
    title: {
      control: {
        type: 'text'
      },
      description: 'Modal title text.',
      defaultValue: 'Hello world!',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    showConfirm: {
      control: { type: 'boolean' },
      description: 'Show or hide confirm button.',
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      }
    },
    confirmText: {
      control: {
        type: 'text'
      },
      description: 'Confirm button label.',
      defaultValue: 'Bevestigen',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Bevestigen' }
      }
    },
    showCancel: {
      control: { type: 'boolean' },
      description: 'Show or hide cancel button.',
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      }
    },
    cancelText: {
      control: {
        type: 'text'
      },
      description: 'Cancel button label.',
      defaultValue: 'Annuleren',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Annuleren' }
      }
    },
    trigger: {
      control: null,
      description: 'Custom trigger element (will open modal on click).',
      defaultValue: <Button>Click me to open modal!</Button>,
      table: {
        type: { summary: 'ReactElement' },
        defaultValue: { summary: null }
      }
    },
    open: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
      description: 'Open or close the modal. Makes the modal controlled and should be used together with `onClose`, `onCancel` and `onConfirm`.'
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      defaultValue: '',
      options: ['', 'large'],
      description: 'Modal size.'
    },
    onConfirm: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onConfirm',
      description: 'Confirm callback, called when clicking on the confirm button.'
    },
    onCancel: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onCancel',
      description: 'Cancel callback, called when clicking on the cancel button.'
    },
    onClose: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onClose',
      description: 'Close callback (called when overlay is clicked, esc or the close button is pressed).'
    },
    onAfterOpen: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onAfterOpen',
      description: 'Modal open callback, called after modal opening.'
    },

    qa: QA_PROP_STORY
  },
};

export const modal = '';
