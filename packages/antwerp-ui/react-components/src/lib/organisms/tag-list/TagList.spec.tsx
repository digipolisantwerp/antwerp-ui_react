import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TagList } from './TagList';
import { Tag } from '../../molecules/tag/Tag';

describe('TagList', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(
      <TagList>
        <Tag label="Scorpion" />
        <Tag label="Raiden" />
      </TagList>
    );
    expect(baseElement).toBeTruthy();
    expect(getByText('Scorpion')).toBeTruthy();
    expect(getByText('Raiden')).toBeTruthy();
  });

  it('should correctly add qa prop', () => {
    const qa = 'tag-list';
    const { baseElement } = render(
      <TagList qa={qa}>
        <Tag label="Scorpion" />
        <Tag label="Raiden" />
      </TagList>
    );
    const tagList = baseElement.querySelector('.o-tag-list') as Element;
    expect(tagList.getAttribute('data-qa')).toBe(qa);
  });

  it('should render children correctly', () => {
    const { baseElement } = render(
      <TagList>
        <Tag label="Scorpion" />
        <Tag label="Raiden" />
      </TagList>
    );
    const tagListItems = baseElement.querySelectorAll('.o-tag-list__item');
    expect(tagListItems.length).toBe(2);
  });
});
