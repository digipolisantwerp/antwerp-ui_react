import { QA_PROP_STORY } from '../../../constants/stories.settings';
import Breadcrumb from './Breadcrumb';

export default {
  title: 'React/Atoms/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component:
          'Use a breadcrumb to help the user to determine or understand their place with a platform or website structure. It indicates their current location, but also hints at the previous levels in the hierarchy to which a page belongs andd to which a user can also navigate with ease.'
      }
    }
  },
  argTypes: {
    items: {
      control: { type: 'object' },
      defaultValue: [
        { label: 'Home', href: '/' },
        { label: 'Google', href: 'https://www.google.be' },
        { label: 'Current Page' }
      ],
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' }
      },
      description:
        'Array of Breadcrumb items link, a link has following attributes: `label`, `href`. The  last `step` in the items (the current page title) is simply displayed as a non-interactive page title label (no `href`!).'
    },
    title: {
      control: { type: 'object' },
      defaultValue: { label: '', tag: 'h1', className: 'h4' },
      table: {
        type: { summary: 'object' }
      },
      description:
        'Optional page title, an object with following fields: `label`, `tag`, `className`. When the page title is placed directly below the breadcrumb, the last chevron and non-interactive label must be omitted from the path.'
    },
    renderLinkFunction: {
      control: { type: 'funnction' },
      table: {
        type: { summary: 'function' }
      },
      description:
        'Optional (custom) link renderer; allows to override the way links are rendered. This is useful when using a routing framework (like React Router). The first parameter of this function is a `Link` object, with fields `label`, `href`. Example: `renderLinkFunction={(link) => <Link to={link.href}>{link.label}</Link>}`'
    },
    qa: QA_PROP_STORY
  }
};

export const breadcrumb = '';
