import React from 'react';
import { shallow, mount } from 'enzyme';
import AccordionTab from './AccordionTab';
import AccordionTabHeader from '../AccordionTabHeader/AccordionTabHeader';
import AccordionTabContent from '../AccordionTabContent/AccordionTabContent';

describe('AccordionTab', () => {
  test('Can render', () => {
    const component = shallow(<AccordionTab />);

    expect(component.find('.m-accordion__tab')).toBeDefined();
  });

  test('Is rendered closed by default', () => {
    const component = shallow(<AccordionTab />);

    expect(component.hasClass('is-open')).toEqual(false);
  });

  test('Can be rendered in an open-state', () => {
    const component = shallow(<AccordionTab open />);

    expect(component.hasClass('is-open')).toEqual(true);
  });

  test('Can contain an AccordionTabHeader-component', () => {
    const component = mount(
      <AccordionTab>
        <AccordionTabHeader />
        <AccordionTabContent />
      </AccordionTab>,
    );

    expect(component.find('m-accordion__header')).toBeDefined();
  });

  test('Can contain an AccordionTabContent-component', () => {
    const component = mount(
      <AccordionTab>
        <AccordionTabHeader />
        <AccordionTabContent />
      </AccordionTab>,
    );

    expect(component.find('.m-accordion__content')).toBeDefined();
  });

  test('Can contain a data-qa attribute', () => {
    const component = mount(
      <AccordionTab data-qa="id-1234">
        <AccordionTabHeader />
        <AccordionTabContent />
      </AccordionTab>,
    );

    expect(component.prop('data-qa')).toBe('id-1234');
  });
});
