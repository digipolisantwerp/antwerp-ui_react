import React from 'react';
import { mount, shallow } from 'enzyme';
import Step from './Step';
import Steps from './Steps';

describe('Steps', () => {
    test('Steps is rendered correctly', () => {
      const component = mount(
        <Steps>
          <Step key="1" title="Step 1"/>
          <Step key="2" title="Step 2"/>
          <Step key="3" title="Step 3"/>
          <Step key="4" title="Step 4"/>
        </Steps>
      );
      expect(component.find('Steps').exists()).toBe(true);
    });

    test('Steps is rendered correctly', () => {
      const component = shallow(
        <Steps qa="id-1234">
          <Step key="1" title="Step 1"/>
          <Step key="2" title="Step 2"/>
          <Step key="3" title="Step 3"/>
          <Step key="4" title="Step 4"/>
        </Steps>
      );
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });
});
