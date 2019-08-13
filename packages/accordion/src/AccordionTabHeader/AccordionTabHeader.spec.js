import React from 'react';
import { shallow } from 'enzyme';
import AccordionTabHeader from './AccordionTabHeader';

describe('AccordionTabHeader', () => {
  test('Can render', () => {
    const component = shallow(<AccordionTabHeader />);

    expect(component.find('.m-accordion__header')).toBeDefined();
  });

  test('Can contain a data-qa attribute', () => {
    const component = shallow(
      <AccordionTabHeader qa="id-1234"/>
    );

    expect(component.find('.m-accordion__header').props()).toHaveProperty('data-qa', 'id-1234');
  });
});
