import Card from './Card';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Molecules/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'Use cards to display content and actions on a single topic as a group. Elements like text and images are placed on them in a way that clearly indicates hierarchy.'
      }
    }
  },
  argTypes: {
    image: {
      table: {
        type: { summary: 'object' }
      },
      control: { type: 'object' },
      defaultValue: {
        src: 'https://placedog.net/400/300?r',
        alt: 'A random dog'
      },
      description: 'The `image` prop sets the image, for the card component.'
    },
    title: {
      table: {
        type: { summary: 'string' }
      },
      defaultValue: 'Card Title',
      control: { type: 'text' },
      description: 'The `title` prop sets the title for the card component.'
    },
    subTitle: {
      table: {
        type: { summary: 'string' }
      },
      defaultValue: 'May 4th 2021, 12:34',
      control: { type: 'text' },
      description:
        'The `subTitle` prop sets the subtitle for the card component. In most cases this should be a date or date and time format.'
    },
    content: {
      table: {
        type: { summary: 'string' }
      },
      defaultValue:
        'Arma virumque cano, Troiae qui primus ab oris Italiam, fato profugus, Laviniaque venit litora, multum ille et terris iactatus et alto vi superum saevae memorem Iunonis ob iram. Multa quoque et bello passus, dum conderet urbem, inferretque deos Latio, genus unde Latinum, Albanique patres, atque altae moenia Romae.',
      control: { type: 'text' },
      description: 'The `content` prop sets the text content for the card component.'
    },
    link: {
      table: {
        type: { summary: 'object' }
      },
      control: { type: 'object' },
      defaultValue: {
        label: 'link label',
        href: 'https://www.google.be',
        target: '_blank'
      },
      description: 'The `link` prop sets the footer action for the card component.'
    },
    titleId: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'aui-card-title' }
      },
      defaultValue: 'aui-card-title',
      description:
        'The `titleId` prop is the id of the title that is also used in the `aria-labelledby` attribute.'
    },
    qa: QA_PROP_STORY
  }
};

export const card = '';
