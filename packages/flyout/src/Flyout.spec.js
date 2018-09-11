import React from 'react';
import { shallow, mount } from 'enzyme';
import Flyout from './Flyout';

import Button from '../../button/src/Button';

 describe('Flyout', () => {

  test('Flyout is not rendered when no trigger is passed', () => {
    const component = shallow(<Flyout>this is the flyout</Flyout>);
     expect(component.exists('.m-flyout')).toEqual(false);
  });

  test('Flyout is rendered when trigger is passed', () => {
    const component = shallow(<Flyout trigger={<Button type="primary">Click me!</Button>} hasPadding>this is the flyout</Flyout>);
    expect(component.exists('.m-flyout')).toEqual(true);
  });

  test('Flyout is closed by default', () => {
    const component = shallow(<Flyout trigger={<Button type="primary">Click me!</Button>} hasPadding>this is the flyout</Flyout>);
    expect(component.state('isOpen')).toBe(false);
  });

  test('Flyout opens when clicking trigger', () => {
    const flyoutWrapper = mount(<Flyout trigger={<Button type="primary">Click me!</Button>} hasPadding>this is the flyout</Flyout>)
    const flyoutButtonWrapper = flyoutWrapper.find('button')

    flyoutButtonWrapper.simulate('click')
    expect(flyoutWrapper.state('isOpen')).toBe(true)
  })

 });