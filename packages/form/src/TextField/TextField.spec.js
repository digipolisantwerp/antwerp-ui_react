import React from 'react';
import { shallow } from 'enzyme';
import TextField from './TextField';

describe('TextField', () => {
    test('TextField is rendered correctly', () => {
      const component = shallow(<TextField />);
      expect(component.find('.a-input').exists()).toBe(true);
    });

    test('TextField should contain a data-qa attribute', () => {
      const component = shallow(<TextField qa="id-1234" />);
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });
});
