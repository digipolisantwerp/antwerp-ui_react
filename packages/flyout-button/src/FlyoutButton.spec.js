import React from 'react';
import { shallow, mount } from 'enzyme';
import FlyoutButton from './FlyoutButton';

 describe('FlyoutButton', () => {

  test('FlyoutButton is rendered', () => {
    const component = shallow(<FlyoutButton />);
    expect(component.exists('.m-flyout__content'));
  });

  test('FlyoutButton contains a data-qa attribute', () => {
    const component = mount(<FlyoutButton qa="id-1234" />);
    expect(component.find('FlyoutContent').parent().props()).toHaveProperty('data-qa', 'id-1234');
  });
 });