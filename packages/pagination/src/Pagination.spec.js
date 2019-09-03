import React from "react";
import { shallow, mount } from "enzyme";
import Pagination from "./Pagination";

describe("Pagination", () => {
  test("It should not render if the totalPages are 0", () => {
    const component = shallow(<Pagination totalValues={0} itemsPerPage={1} />);
    expect(component.type()).toEqual(null);
  });

  test("It should calculate the totalPages", () => {
    const component = mount(<Pagination itemsPerPage={4} totalValues={20} />);
    expect(component.state().totalPages).toEqual(5);
  });

  test("It should generate numbers for the pages", () => {
    const component = mount(<Pagination itemsPerPage={4} totalValues={20} />);
    expect(component.state().numbers).toEqual(["1", "2", "3", "4", "5"]);
  });

  test("It should generate ... if there are more then 8 pages", () => {
    const component = mount(<Pagination itemsPerPage={4} totalValues={60} />);
    expect(component.state().numbers).toContain("...");
  });

  test("It should generate ... at the end if there are more then 8 pages and the current page is below 5", () => {
    const component = mount(
      <Pagination itemsPerPage={4} totalValues={60} currentPage={4} />
    );
    const { numbers } = component.state();
    expect(numbers[numbers.length - 2]).toContain("...");
  });

  test("It should generate ... at the start if there are more then 8 pages and the current page is 5 or above", () => {
    const component = mount(
      <Pagination itemsPerPage={4} totalValues={60} currentPage={5} />
    );
    const { numbers } = component.state();
    expect(numbers[1]).toContain("...");
  });

  test("It should generate ... at the end if there are more then 8 pages and the current page is 5 or above", () => {
    const component = mount(
      <Pagination itemsPerPage={4} totalValues={60} currentPage={5} />
    );
    const { numbers } = component.state();
    expect(numbers[numbers.length - 2]).toContain("...");
  });

  test("It should add the styling passed by styling", () => {
    const component = mount(
      <Pagination
        itemsPerPage={4}
        totalValues={60}
        styling="m-pagination--large"
      />
    );
    expect(
      component.find(".m-pagination.m-pagination--large").exists()
    ).toEqual(true);
  });

  test("It should disable the prev button when on first page", () => {
    const component = mount(
      <Pagination itemsPerPage={4} totalValues={60} currentPage={1} />
    );
    expect(component.find(".m-pagination__prev .is-disabled").exists()).toEqual(
      true
    );
  });

  test("It should disable the next button when on the last", () => {
    const component = mount(
      <Pagination itemsPerPage={4} totalValues={60} currentPage={15} />
    );
    expect(component.find(".m-pagination__next .is-disabled").exists()).toEqual(
      true
    );
  });

  test("It should set the `is-active` class on the current active page", () => {
    const component = mount(
      <Pagination itemsPerPage={4} totalValues={60} currentPage={5} />
    );
    // 3 because["1","...","4", "5", "6", "...","15"]
    expect(component.find("#pagination-button-3.is-active").exists()).toEqual(
      true
    );
  });

  test("It should render text on display `text`", () => {
    const component = mount(
      <Pagination itemsPerPage={4} totalValues={60} display="text" />
    );
    expect(component.find(".m-pagination__label").exists()).toEqual(true);
  });

  test("It should return the selected number onUpdate", () => {
    let number = 0;
    const cb = n => {
      number = n;
    };
    const component = mount(
      <Pagination itemsPerPage={4} totalValues={60} onUpdate={cb} />
    );
    // numbers = ["1","2","3","4"] => button index 3
    component.find("#pagination-button-3").simulate("click");
    expect(number).toEqual(4);
  });

  test("It should change the currentPage on prev click", () => {
    let number = 0;
    const cb = n => {
      number = n;
    };
    const component = mount(
      <Pagination
        itemsPerPage={4}
        totalValues={60}
        currentPage={5}
        onUpdate={cb}
      />
    );
    component.find("#pagination-prev-page").simulate("click");
    expect(number).toEqual(4);
  });

  test("It should change the currentPage on next click", () => {
    let number = 0;
    const cb = n => {
      number = n;
    };
    const component = mount(
      <Pagination
        itemsPerPage={4}
        totalValues={60}
        currentPage={5}
        onUpdate={cb}
      />
    );
    component.find("#pagination-next-page").simulate("click");
    expect(number).toEqual(6);
  });

  test("It should change the currentPage on propsChange", () => {
    const component = mount(
      <Pagination
        itemsPerPage={4}
        totalValues={60}
        currentPage={5}
      />
    );
    component.setProps({currentPage: 6});
    expect(component.state().currentPage).toEqual(6);
  });
});
