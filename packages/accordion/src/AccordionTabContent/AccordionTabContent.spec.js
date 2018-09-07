import React from 'react';
import { shallow } from 'enzyme';
import AccordionTabContent from './AccordionTabContent';

describe('AccordionTabContent', () => {
  test('Can render', () => {
    const component = shallow(<AccordionTabContent />);

    expect(component.find('.m-accordion__content')).toBeDefined();
  });
});
