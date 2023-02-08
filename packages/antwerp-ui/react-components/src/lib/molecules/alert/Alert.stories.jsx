import { Alert } from './Alert';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Molecules/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'Use an alert to keep the user informed of important, critical and sometimes time-sensitive issues.'
      }
    }
  },
  argTypes: {
    title: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      defaultValue: 'Alert Title',
      description:
        'The `title` prop is the required title of a modal alert or the optional descriptive title of an inline alert'
    },
    theme: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      defaultValue: '',
      options: ['', 'success', 'warning', 'danger'],
      description:
        'Theme of the alert, by default the recognisable Antwerp “Endeavour”-blue theme is used. Additional themes for "success", "warning" and "danger" use their own corresponding thematic colours as defined in the colour palette for those states and are accompanied by clarifying leading icons.'
    },
    modal: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      },
      defaultValue: true,
      description: 'Use this prop to indicate if the alert should be presented as a modal type window.'
    },
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' }
      },
      defaultValue: (
        <p>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa{' '}
          <a href="javascript:void(0);">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
          ullamcorper nulla non metus auctor fringilla.
        </p>
      ),
      description: 'Rich text / string to be shown as content inside the `Alert` component.'
    },
    onConfirm: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onConfirm',
      description:
        'Function that is triggered when the confirm button for a modal alert is clicked, define it to show the confirm button.'
    },
    confirmLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Bevestigen' }
      },
      defaultValue: 'Confirm',
      description:
        'The label used on the confirm button for modal alerts. The button will only be shown if `onConfirm` is defined. '
    },
    onCancel: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' },
      },
      action: 'onCancel',
      description:
        'Function that is triggered when the cancel button for a modal alert is clicked, define it to show the cancel button.'
    },
    cancelLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Annuleren' }
      },
      defaultValue: 'Cancel',
      description:
        'The label used on the cancel button for modal alerts. The button will only be shown if `cancelAction` is defined. '
    },
    onClose: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onClose',
      description: 'Function that is triggered when the modal alert is closed (i.e. the close button is clicked).'
    },
    ariaLabelClose: {
      control: { type: 'text' },
      defaultValue: 'Close',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Sluiten' }
      },
      description: 'The aria label used on the close icon when a modal alert is used.'
    },
    titleId: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'aui-alert-title' }
      },
      defaultValue: 'aui-alert-title',
      description:
        'The `titleId` prop is the id of the title that is also used in the `aria-labelledby` attribute.'
    },
    qa: QA_PROP_STORY
  }
};

export const alert = '';
