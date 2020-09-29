import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
    test('Checkbox is rendered correctly', () => {
      const component = shallow(<Checkbox />);
      expect(component.exists('.a-input'));
    });

    test('Checkbox should contain a data-qa attribute', () => {
      const component = shallow(<Checkbox qa="id-1234" />);
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });

    test('Checkbox should update the checked prop when is is set', () => {
      const component = shallow(<Checkbox checked={true} />);
      expect(component.find('input[type="checkbox"]').prop('checked')).toEqual(true);
      component.setProps({
        checked: false,
      });

      expect(component.find('input[type="checkbox"]').prop('checked')).toEqual(false)
    });
});
