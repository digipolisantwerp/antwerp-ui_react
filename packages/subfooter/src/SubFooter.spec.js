import React from 'react';
import { mount, shallow } from 'enzyme';
import SubFooter from './SubFooter';

describe('SubFooter', () => {
    test('SubFooter is rendered correctly', () => {
      const component = mount(
        <SubFooter>
        </SubFooter>
      );
      expect(component.find('SubFooter').exists()).toBe(true);
    });

    test('StandardSubFooter is rendered when type is given', () => {
      const component = mount(
        <SubFooter type="antwerpen">
        </SubFooter>
      );
      expect(component.find('StandardSubFooter').exists()).toBe(true);
    });

    test('SubFooter should contain a data-qa attribute', () => {
      const component = shallow(
        <SubFooter qa="id-1234">
        </SubFooter>
      );
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });

    test('StandardSubFooter should contain a data-qa attribute', () => {
      const component = shallow(
        <SubFooter type="antwerpen" qa="id-1234">
        </SubFooter>
      );
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });
});
