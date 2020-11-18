import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './Toggle';

describe('Toggle', () => {
    test('Toggle is rendered correctly', () => {
      const component = shallow(<Toggle />);
      expect(component.find('.a-toggle').exists()).toBe(true);
    });

    test('Toggle should contain a data-qa attribute', () => {
      const component = shallow(<Toggle qa="id-1234" />);
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });
});
