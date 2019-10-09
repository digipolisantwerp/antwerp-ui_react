import React from 'react';
import { shallow } from 'enzyme';
import Radio from './Radio';

describe('Radio', () => {
    test('Radio is rendered correctly', () => {
      const component = shallow(<Radio />);
      expect(component.find('.a-input__radio').exists()).toBe(true);
    });

    test('Radio should contain a data-qa attribute', () => {
      const component = shallow(<Radio qa="id-1234" />);
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });
});
