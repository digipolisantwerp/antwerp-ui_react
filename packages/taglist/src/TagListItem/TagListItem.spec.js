import React from 'react';
import { mount, shallow } from 'enzyme';
import TagListItem from './TagListItem';

describe('TagListItem', () => {
    test('TagListItem is rendered correctly', () => {
      const component = mount(
        <TagListItem>
        </TagListItem>
      );
      expect(component.find('TagListItem').exists()).toBe(true);
    });

    test('TagListItem should contain a data-qa attribute', () => {
      const component = shallow(
        <TagListItem qa="id-1234">
        </TagListItem>
      );
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });
});
