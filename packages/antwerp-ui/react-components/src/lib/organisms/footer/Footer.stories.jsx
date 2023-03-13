import { Footer } from './Footer';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Organisms/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component:
          'The footer component provides an important landmark for the user at the bottom of a page. In the footer you can find information that is relevant to the entire application. Normally it contains a copyright notice together with three links:\n\n• Privacy: a link to the application’s privacy statement.\n\n• Accessibility: a link to the application’s accessibility statement.\n\n• Cookie settings (optional): a link to adjust cookie settings that were previously chosen.\n\nOnly use the footer at the bottom of a page. Also, do not include content in the footer that is only relevant to the page and not to the entire application.'
      }
    }
  },
  argTypes: {
    backToTop: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'The `backToTop` prop controls whether the footer gets a button which allows the user to scoll back to the top of the page. Make sure to provide a suitable aria-label for it using the `ariaLabel` prop.'
    },
    backToTopAriaLabel: {
      control: { type: 'text' },
      defaultValue: 'Ga naar boven',
      if: { arg: 'backToTop' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Terug naar omhoog' }
      },
      description: 'The `ariaLabel` prop provides the back to top button with a suitable aria-label attribute.'
    },
    items: {
      control: { type: 'array' },
      defaultValue: [
        { label: '© stad Antwerpen' },
        { label: 'Privacy', href: '#' },
        { label: 'Toegankelijkheid', href: '#' },
        { label: 'Cookie instellingen', href: '#' }
      ],
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '' }
      },
      description:
        'The `items` prop contains the content that should be placed in the footer. This prop expects an array of items in the following format `{ label: "", target: "" }` where `target` can be empty.'
    },
    qa: QA_PROP_STORY
  }
};

export const footer = '';
