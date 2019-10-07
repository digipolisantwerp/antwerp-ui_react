import React from 'react';
import { shallow } from 'enzyme';
import Fieldset from './Fieldset';

describe('Fieldset', () => {
    test('Fieldset is rendered correctly', () => {
      const component = shallow(<Fieldset />);
      expect(component.exists('fieldset'));
    });

    test('Fieldset should contain a data-qa attribute', () => {
      const component = shallow(<Fieldset qa="id-1234" />);
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });
});
