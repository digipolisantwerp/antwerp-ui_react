import React from 'react';
import { shallow, mount } from 'enzyme';
import UserMenu from './UserMenu';

describe('UserMenu', () => {

  it('should have a flyout component', () => {
    const component = shallow(<UserMenu
      firstName="John"
      lastName="Doe"
      loggedIn={true}
      logoutUrl="/auth/logout/aprofiel">
      <div>This is the content</div>
    </UserMenu>);
    expect(component.find('.m-flyout')).toBeDefined();
  });

 });