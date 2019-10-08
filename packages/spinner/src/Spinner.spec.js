import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner', () => {
    test('Spinner is rendered correctly', () => {
      const component = shallow(<Spinner />);
      expect(component.find('.a-spinner').exists()).toBe(true);
    });

    test('Spinner should contain a data-qa attribute', () => {
      const component = shallow(<Spinner qa="id-1234" />);
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });
});
