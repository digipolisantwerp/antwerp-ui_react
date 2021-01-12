import React from 'react';
import { shallow, mount } from 'enzyme';
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

    const atomicElementsWithoutKey = [
      {
        value: "Organisms",
        label: "Organisms"
      },
      {
        value: "Molecules",
        label: "Molecules"
      },
    ]

    test('RadioGroup is rendered correctly', () => {
      const component = mount(
        <RadioGroup
          name={"radio-name"}
          label={"Atomic Elements"}
          options={atomicElements}
        ></RadioGroup>
      );
      expect(component.find(".a-input").exists()).toBe(true);
      expect(component.find('input').first().exists()).toBe(true);
      expect(component.find('input').first().props()).toHaveProperty('id', '0');
    });

    test('RadioGroup generates ids that contain name and value', () => {
      const component = mount(
        <RadioGroup
          name={"radio-name"}
          label={"Atomic Elements"}
          options={atomicElementsWithoutKey}
        ></RadioGroup>
      );
      expect(component.find(".a-input").exists()).toBe(true);
      expect(component.find('input').first().exists()).toBe(true);
      expect(component.find('input').first().props()).toHaveProperty('id', 'radio-name_Organisms');
    });

    test('RadioGroup should contain a data-qa attribute', () => {
      const component = shallow(
        <RadioGroup
          name={"radio-name"}
          label={"Atomic Elements"}
          options={atomicElements}
          qa="id-1234"
        ></RadioGroup>
      );
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });
});
