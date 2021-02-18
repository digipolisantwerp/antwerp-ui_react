import React from 'react';
import { shallow, mount } from 'enzyme';
import TelephoneNumber from './TelephoneNumber';

describe('TelephoneNumber', () => {
    test('TelephoneNumber is rendered correctly', () => {
      const component = shallow(<TelephoneNumber />);
      expect(component.find('.a-input-telephone').exists()).toBe(true);
      expect(component.find('.a-input-telephone__area-code').exists()).toBe(true);
      expect(component.find('.a-input-telephone__number').exists()).toBe(true);
    });

    test('TelephoneNumber should contain a data-qa attribute', () => {
      const component = shallow(<TelephoneNumber qa="id-1234" />);
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });

    test('TelephoneNumber should emit a default value when no value is set', () => {
      let newValue;
      const component = mount(<TelephoneNumber onChange={(value) => newValue = value} qa="id-1234" />);

      component.render();

      expect(component.props()).toHaveProperty('qa', 'id-1234');
      expect(newValue).toEqual({
        areaCode: '+32',
        number: ''
      })
    });
});
