import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
    test('Card is rendered correctly', () => {
      const component = shallow(<Card />);
      expect(component.exists('.m-card'));
    });

    test('Card should contain a data-qa attribute', () => {
      const component = shallow(<Card qa="id-1234" />);
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });
});
