import { Accordion } from './Accordion';
import AccordionTab from './AccordionTab';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Molecules/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          'An accordion is a flexible control that allows for large chunks of information to be presented within a single page through progressive disclosure. It aims to reduce cognitive load and allows the user to expose or hide multiple blocks of information as they choose.'
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      options: ['', 'open'],
      description: 'Set the type of the accordion component. An open accordion omits the outside borders.'
    },
    children: {
      table: {
        type: { summary: 'ReactNode | ReactNode[]' }
      },
      description: 'Children of the `Accordion` component are `AccordionTab` components.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  return (
    <Accordion type={args.type}>
      <AccordionTab header="Tab 1">Content</AccordionTab>
      <AccordionTab header="Tab 2">Content 2</AccordionTab>
    </Accordion>
  );
};

export const accordion = Template.bind({});
