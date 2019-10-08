import React from 'react';
import { shallow } from 'enzyme';
import RadioGroup from "./RadioGroup";

describe("RadioGroup", () => {
    const atomicElements = [
      {
        key: "0",
        value: "Organisms",
        label: "Organisms"
      },
      {
        key: "1",
        value: "Molecules",
        label: "Molecules"
      },
      {
        key: "2",
        value: "Atoms",
        label: "Atoms"
      },
      {
        key: "3",
        value: "Quarks",
        label: "Quarks"
      }
    ];

    test('RadioGroup is rendered correctly', () => {
      const component = shallow(
        <RadioGroup
          id={"radio-id"}
          label={"Atomic Elements"}
          options={atomicElements}
        ></RadioGroup>
      );
      expect(component.find('.a-input').exists()).toBe(true);
    });

    test('RadioGroup should contain a data-qa attribute', () => {
      const component = shallow(
        <RadioGroup
          id={"radio-id"}
          label={"Atomic Elements"}
          options={atomicElements}
          qa="id-1234"
        ></RadioGroup>
      );
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });
});
