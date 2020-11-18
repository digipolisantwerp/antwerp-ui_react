import React from 'react';
import { shallow } from 'enzyme';
import InputLabel from './InputLabel';

describe('InputLabel', () => {
    test('InputLabel is rendered correctly', () => {
      const component = shallow(<InputLabel />);
      expect(component.exists('.a-input__label'));
    });

    test('InputLabel should contain a data-qa attribute', () => {
      const component = shallow(<InputLabel qa="id-1234" />);
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });
});
