import React from 'react';
import { shallow, mount } from 'enzyme';
import AccordionTabContent from './AccordionTabContent';

describe('AccordionTabContent', () => {
  test('Can render', () => {
    const component = shallow(<AccordionTabContent />);

    expect(component.find('.m-accordion__content')).toBeDefined();
  });

  test('Can contain a data-qa attribute', () => {
    const component = mount(
      <AccordionTabContent data-qa="id-1234"/>
    );

    expect(component.prop('data-qa')).toBe('id-1234');
  });
});
