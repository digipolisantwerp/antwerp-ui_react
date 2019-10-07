import React from 'react';
import { mount } from 'enzyme';
import Slider from './Slider';

describe('Slider', () => {
    test('Slider is rendered correctly', () => {
      const component = mount(<Slider />);
      expect(component.find('.m-range-slider')).toBeDefined();
    });

    test('Slider should contain a data-qa attribute', () => {
      const component = mount(<Slider qa="id-1234" />);
      expect(component.find('.m-range-slider').parent().props()).toHaveProperty('data-qa', 'id-1234');
    });
});
