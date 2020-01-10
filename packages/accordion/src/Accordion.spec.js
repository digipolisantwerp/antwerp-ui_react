import React from 'react';
import { shallow, mount } from 'enzyme';
import Accordion from './Accordion';
import AccordionTab from './AccordionTab/AccordionTab';

describe('Accordion', () => {
  test('Can render', () => {
    const component = shallow(<Accordion />);

    expect(component.find('.m-accordion').exists()).toBe(true);
  });

  test('Can contain one or more AccordionTab-components', () => {
    const component = mount(
      <Accordion>
        <AccordionTab />
        <AccordionTab />
        <AccordionTab />
      </Accordion>,
    );

    expect(component.find('.m-accordion__tab').exists()).toBe(true);
    expect(component.find('.m-accordion__tab').length).toEqual(3);
  });

  test('Can contain a data-qa attribute', () => {
    const component = shallow(
      <Accordion qa="id-1234"/>
    );

    expect(component.find('.m-accordion').props()).toHaveProperty('data-qa', 'id-1234');
  });
});
