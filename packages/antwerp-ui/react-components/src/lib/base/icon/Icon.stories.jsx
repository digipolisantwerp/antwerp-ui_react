import { Icon } from './Icon';

export default {
  title: 'React/Base/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component:
          'An icon is an image that represents a concept with meaning for the user. Icons can have an important role in any application. They are mostly language-independent, so without much effort they can give context to a lot of people. They are also very small, which means that they don’t take up a lot of screen real estate.'
      }
    }
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
      },
      defaultValue: 'single-neutral',
      options: ['single-neutral', 'social-media-snapchat', 'os-system-apple', 'love-it'],
      description: 'Name of the icon, can be used with or without `ai`. E.g. `love-it` or `ai-love-it` are both valid names.',
    },
    thin: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      defaultValue: false,
      description: 'If you use a more detailed icon it can become unreadable. Use the `thin` prop to make strokes a bit thinner.',
    },
    screenReaderText: {
      control: { type: 'text' },
      description: 'An appropriate text alternative within your icon, uses the `.u-screen-reader-only` class.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
    },
    qa: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
      description: 'The qa parameter allows to set the `data-qa` prop on the rendered HTML of the component.',
    }
  }
};

export const icon = '';
