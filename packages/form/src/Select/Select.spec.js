import React from 'react';
import { shallow } from 'enzyme';
import Select from "./Select";

describe("Select", () => {
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

    test('Select is rendered correctly', () => {
      const component = shallow(
        <Select
          id={"select-id"}
          label={"Atomic Elements"}
          options={atomicElements}
        ></Select>
      );
      expect(component.find('.a-input').exists()).toBe(true);
    });

    test('Select should contain a data-qa attribute', () => {
      const component = shallow(
        <Select
          id={"select-id"}
          label={"Atomic Elements"}
          options={atomicElements}
          qa="id-1234"
        ></Select>
      );
      expect(component.props()).toHaveProperty('data-qa', 'id-1234');
    });

    test('Should render a placeholder when it is set', () => {
      const component = shallow(
        <Select
          id={"select-id"}
          label={"Atomic Elements"}
          options={atomicElements}
          placeholder="placeholderValue"
        ></Select>
      );
      const select = component.find('#select-id');
      const placeholderOption = select.childAt(0);

      expect(select.props().value).toBeUndefined();
      expect(placeholderOption.text()).toBe('placeholderValue');
      expect(placeholderOption.props().disabled).toBeTruthy();
      expect(placeholderOption.props().selected).toBeTruthy();
    });
});
