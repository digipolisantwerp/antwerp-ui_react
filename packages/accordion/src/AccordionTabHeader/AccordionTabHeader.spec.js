import React from 'react';
import { shallow, mount } from 'enzyme';
import AccordionTabHeader from './AccordionTabHeader';

describe('AccordionTabHeader', () => {
  test('Can render', () => {
    const component = shallow(<AccordionTabHeader />);

    expect(component.find('.m-accordion__header')).toBeDefined();
  });

  test('Can contain a data-qa attribute', () => {
    const component = mount(
      <AccordionTabHeader data-qa="id-1234"/>
    );

    expect(component.prop('data-qa')).toBe('id-1234');
  });
});
