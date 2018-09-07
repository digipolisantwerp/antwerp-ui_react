import React from 'react';
import { shallow } from 'enzyme';
import AccordionTabHeader from './AccordionTabHeader';

describe('AccordionTabHeader', () => {
  test('Can render', () => {
    const component = shallow(<AccordionTabHeader />);

    expect(component.find('.m-accordion__header')).toBeDefined();
  });
});
