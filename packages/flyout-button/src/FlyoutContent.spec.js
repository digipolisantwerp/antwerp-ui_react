import React from 'react';
import { shallow, mount } from 'enzyme';
import FlyoutContent from './FlyoutContent';

import Button from '../../button/src/Button';

 describe('FlyoutContent', () => {

  test('FlyoutContent is rendered', () => {
    const component = shallow(<FlyoutContent />);
    expect(component.exists('.m-flyout__content'));
  });

  test('FlyoutButton contains a data-qa attribute', () => {
    const component = mount(<FlyoutContent qa="id-1234" />);
    expect(component.find('.m-flyout__content').props()).toHaveProperty('data-qa', 'id-1234');
  });
 });