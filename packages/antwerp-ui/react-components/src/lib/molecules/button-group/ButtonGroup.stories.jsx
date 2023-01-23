import { Button } from '../../atoms/button';
import ButtonGroup from './ButtonGroup';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Molecules/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component: 'The `ButtonGroup` component wraps its children in a div with the `m-button-group` className.'
      }
    }
  },
  argTypes: {
    vertical: {
      defaultValue: false,
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      description:
        'Buttons in a `ButtonGroup` can be aligned horizontally (default) or vertically as a list.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = ({ ...args }) => (
  <ButtonGroup {...args}>
    <Button avatar={{ image: 'https://placedog.net/100/100?r' }}>Avatar button</Button>
    <Button iconLeft="ai-archive">Icon left</Button>
    <Button iconRight="archive">Icon right</Button>
    <Button outline>Outline</Button>
  </ButtonGroup>
);

export const buttonGroup = Template.bind({});
