import { Pagination } from './Pagination';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { useState } from 'react';

export default {
  title: 'React/Molecules/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component:
          'The pagination component offers the user an easy method to jump between large amounts of related content that spans across multiple pages. These can also be rows in a data table, a list of cards, etc. Pagination should never be used to indicate progress.'
      }
    }
  },
  argTypes: {
    currentPage: {
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      },
      description: 'The page number of the current page. Use it together with `onChange` to control the component.'
    },
    itemsPerPage: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' }
      },
      defaultValue: 10,
      description: 'The amount of items that should be displayed per page.'
    },
    totalItems: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' }
      },
      defaultValue: 100,
      description: 'The total amount of items.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Function that is triggered when page is updated. Makes the component controlled together with `currentPage` prop.'
    },
    display: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'numbers' }
      },
      defaultValue: 'numbers',
      options: ['text', 'numbers'],
      description: 'Set the type of pagination, or with all numbers or with one single text label.'
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' }
      },
      options: ['small', 'medium'],
      description: 'Set the size of the pagination, `medium` is the default and can be omitted.'
    },
    text: {
      if: { arg: 'display', eq: 'text' },
      control: { type: 'text' },
      defaultValue: '%currentPage% of %totalPages%',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '%currentPage% van de %totalPages%' }
      },
      description:
        'Text used when the `display` mode is `text`. `%currentPage%` and `%totalPages%` can be used and will be replaced by their actual values.'
    },
    ariaLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Paginering' }
      },
      description: 'The aria-label for the `Pagination` component.'
    },
    ariaLabelPreviousPage: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Vorige pagina' }
      },
      description: 'The aria-label for the previous page button in the `Pagination` component.'
    },
    ariaLabelNextPage: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Volgende pagina' }
      },
      description: 'The aria-label for the next page button in the `Pagination` component.'
    },
    ariaLabelPage: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Pagina' }
      },
      description: 'The aria-label for a page in the `Pagination` component.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  const [current, setCurrent] = useState(1);
  return (
    <Pagination
      {...args}
      currentPage={current}
      onChange={(p) => {
        args.onChange(p);
        setCurrent(p);
      }}
    />
  );
};

export const pagination = Template.bind({});
