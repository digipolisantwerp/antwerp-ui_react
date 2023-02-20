import { QA_PROP_STORY } from '../../../../constants/stories.settings';
import SocialButton from './SocialButton';

export default {
  title: 'React/Atoms/Button/SocialButton',
  component: SocialButton,
  parameters: {
    docs: {
      description: {
        component:
          'Social buttons are used to promote related social channels and to make it easier for the user to find those channels on social media.\n\nUse social media icons to allow the user to share content on their social media. Always provide the necessary label to clarify this usage.'
      }
    }
  },
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
      defaultValue: 'Facebook',
      table: {
        type: { summary: 'string' }
      },
      description: 'The `ariaLabel` describes an accessible name for the component.'
    },
    type: {
      control: { type: 'select' },
      defaultValue: 'facebook',
      options: ['facebook', 'twitter', 'linkedin', 'instagram', 'snapchat'],
      table: {
        type: { summary: 'string' }
      },
      description: 'The `type` prop controls what social media icon is used for the social button.'
    },
    href: {
      control: { type: 'text' },
      defaultValue: '/',
      table: {
        type: { summary: 'url' },
        defaulValue: { summary: '/' }
      },
      description: 'The url where a click on the social button leads to.'
    },
    uniform: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'The `uniform` prop changes the style of the social button to one that is consistent across multiple `types`.'
    },
    negative: {
      control: { type: 'boolean' },
      defaultValue: false,
      if: { arg: 'uniform', truthy: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'The `negative` prop, when used along with the `uniform` prop inverts the color style of a uniform social button.'
    },
    qa: QA_PROP_STORY
  }
};

export const socialButton = '';
