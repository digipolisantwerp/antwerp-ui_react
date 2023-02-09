import { Header } from './Header';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Organisms/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component:
          'The header component provides an important landmark for the user at the top of a page.'
      }
    }
  },
  argTypes: {
    logoHref: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: {summary: '/'}
      },
      defaultValue:'/',
      description: 'The url where a click on the logo in the header component leads to.',
    },
    logoSrc: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: {summary: 'https://a-ui.github.io/core_branding_scss/images/a-logo.svg'}
      },
      defaultValue:'https://a-ui.github.io/core_branding_scss/images/a-logo.svg',
      description: 'The url for the src logo image in the header component.',
    },
    logoAlt: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: {summary: 'Naar de startpagina'}
      },
      defaultValue: 'Naar de startpagina',
      description: 'The alternative text for the logo image in the header component.',
    },
    skipToMainLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: {summary: 'Ga naar inhoud'}
      },
      defaultValue:'Ga naar inhoud',
      description: 'The label for the skip to main content button in the header.',
    },
    buttons: {
      table: {
        type: { summary: 'array' },
        defaultValue: {summary: '[]'}
      },
      defaultValue: [{label:"Hello world"}],
      description: 'Array of top right header buttons, use objects of button properties with extra property `label`.',
    },
    ariaLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: {summary: 'Header'}
      },
      defaultValue:'Header',
      description: 'The aria-label for the header component',
    },
    qa: QA_PROP_STORY
  }
};

export const header = '';
