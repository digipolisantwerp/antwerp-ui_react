import { useState } from 'react';
import PageIndicator from './PageIndicator';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Molecules/PageIndicator',
  component: PageIndicator,
  parameters: {
    docs: {
      description: {
        component:
          'A page indicator is used to inform the users on which panel or page in a set they are currently viewing. It displays the total number of panels, as well as which panel is currently active, or in view.'
      }
    }
  },
  argTypes: {
    activePage: {
      control: { type: null },
      defaultValue: 'page-1',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'page-1' }
      },
      description:
        'ID of the current active page. Must be one of IDs of pages provided via `pages` prop. Makes the component controlled, use `onPageChange` to listen for changes.'
    },
    pages: {
      control: { type: 'object' },
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' }
      },
      defaultValue: [
        { id: 'page-1', ariaControls: 'panel-1', ariaLabel: 'Page 1' },
        { id: 'page-2', ariaControls: 'panel-2', ariaLabel: 'Page 2' },
        { id: 'page-3', ariaControls: 'panel-3', ariaLabel: 'Page 3' }
      ],
      description: 'Allows to define pages displayed with the component.'
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      defaultValue: '',
      options: ['', 'large', 'small'],
      description: 'Size of the component.'
    },
    onPageChange: {
      control: { type: 'function' },
      action: 'onPageChange',
      table: {
        type: { summary: 'function' }
      },
      description: 'Allows to control which page is activated. First parameter of the function is the new page.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  const [activePage, setActivePage] = useState('page-1');
  return (
    <div role="tablist">
      <div
        id="panel-1"
        className="u-margin-bottom"
        role="tabpanel"
        aria-labelledby="page-1"
        hidden={activePage !== 'page-1'}
      >
        <p>Content for the first panel (switch page to change content)</p>
      </div>
      <div
        id="panel-2"
        className="u-margin-bottom"
        role="tabpanel"
        aria-labelledby="page-2"
        hidden={activePage !== 'page-2'}
      >
        <p>Content for the second panel (switch page to change content)</p>
      </div>
      <div
        id="panel-3"
        className="u-margin-bottom"
        role="tabpanel"
        aria-labelledby="page-3"
        hidden={activePage !== 'page-3'}
      >
        <p>Content for the third panel (switch page to change content)</p>
      </div>
      <PageIndicator
        {...args}
        activePage={activePage}
        onPageChange={(p) => {
          args.onPageChange(p);
          setActivePage(p);
        }}
      />
    </div>
  );
};

export const pageIndicator = Template.bind({});
