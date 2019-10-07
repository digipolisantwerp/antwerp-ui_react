import React from 'react';
import { shallow } from 'enzyme';
import Textarea from './Textarea';

describe('Textarea', () => {
    test('Textarea is rendered correctly', () => {
      const component = shallow(<Textarea />);
      expect(component.find('.a-input')).toBeDefined();
    });

    test('Textarea should contain a data-qa attribute', () => {
      const component = shallow(<Textarea qa="id-1234" />);
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });
});
