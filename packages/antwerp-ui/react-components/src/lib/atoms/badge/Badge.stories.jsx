import Badge from './Badge';

export default {
  title: 'React/Atoms/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          'A badge is a small numeric label that accompanies other elements, such as text, links, tabs, icons, etc., and can be used to indicate a value associated with the accompanying element. A prime use-case example of a badge is for denoting how many new messages or notifications are unread or awaiting the user in an inbox.'
      }
    }
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      defaultValue: '1',
      table: {
        type: { summary: 'integer' },
        defaultValue: { summary: '' }
      },
      description: 'The content of the badge is passed as a children prop. It will only display numeric values.'
    },
    type: {
      control: { type: 'select' },
      defaultValue: '',
      options: ['', 'outlined', 'transparent'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'Badges are available in 3 different types, with each providing either a high, medium or low emphasis. The high emphasis is the default type and requires no extra type parameter. The medium emphasis uses the *outlined* type. The low emphasis uses the *transparent* type.'
    },
    theme: {
      control: { type: 'select' },
      defaultValue: '',
      options: ['', 'primary', 'neutral'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'Badges can also be themed to reflect the context in which they are being used. The theme parameter can be omitted for the neutral style.'
    },
    ariaLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The ariaLabel describes an accessible name for the badge component.'
    },
    qa: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The qa parameter allows to set the `data-qa` prop on the rendered html of the component.'
    }
  }
};

export const badge = '';
