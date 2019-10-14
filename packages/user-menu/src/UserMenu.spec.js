import React from 'react';
import { shallow, mount } from 'enzyme';
import UserMenu from './UserMenu';

describe('UserMenu', () => {

  it('should not show any avatar or name when the user is not logged in', () => {
    const component = shallow(<UserMenu
      user={{
        firstName:'John',
        lastName:'Doe',
        avatarUrl:'https://gravatar.com/avatar/66f865ee03bc019d2f06af6ec0c434ce?s=200'}}
      loggedIn={false}
      logoutUrl="/auth/logout/aprofiel">
      <div>This is the content</div>
    </UserMenu>);
    expect(component.find('Avatar').length).toBe(0);
  });

  it('should have a flyout component', () => {
    const component = shallow(<UserMenu
      user={{
        firstName:'John',
        lastName:'Doe',
        avatarUrl:'https://gravatar.com/avatar/66f865ee03bc019d2f06af6ec0c434ce?s=200'}}
      loggedIn={true}
      logoutUrl="/auth/logout/aprofiel">
      <div>This is the content</div>
    </UserMenu>);
    expect(component.find('Avatar').length).toBe(1);
    expect(component.find('Flyout').length).toBe(1);
  });

  it('should contain a data-qa attribute', () => {
    const component = shallow(<UserMenu
      user={{
        firstName:'John',
        lastName:'Doe',
        avatarUrl:'https://gravatar.com/avatar/66f865ee03bc019d2f06af6ec0c434ce?s=200'}}
      loggedIn={false}
      logoutUrl="/auth/logout/aprofiel"
      qa="id-1234">
      <div>This is the content</div>
    </UserMenu>);
    expect(component.props()).toHaveProperty('data-qa', 'id-1234');
  });
 });