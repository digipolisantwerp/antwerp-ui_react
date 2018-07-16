import Avatar from './Avatar';
import { mount } from 'enzyme';
import React from 'react';

test('should apply the correct className for size - small', () => {
    const avatar = mount(<Avatar size="small">test</Avatar>);
    expect(avatar.getDOMNode().className).toContain("a-avatar--small");
});

test('should apply the correct className for size - medium', () => {
    const avatar = mount(<Avatar size="medium">test</Avatar>);
    expect(avatar.getDOMNode().className).toContain("a-avatar--medium");
});

test('should apply the correct className for size - large', () => {
    const avatar = mount(<Avatar size="large">test</Avatar>);
    expect(avatar.getDOMNode().className).toContain("a-avatar--large");
});

test('it should apply the style object', () => {
    const avatarStyle = { color: 'green' };
    const avatar = mount(<Avatar style={avatarStyle} />);
    expect(avatar.getDOMNode().style).toHaveProperty('color');
});

test('it should show the icon when provided', () => {
    const avatar = mount(<Avatar icon="bell" />);
    expect(avatar.find('i').props().className).toContain('fa-bell');
});

test('it should show the letters when provided', () => {
    const avatar = mount(<Avatar letter="SP" />);
    expect(avatar.find('span').text()).toBe('SP');
});

test('it should show the image and alt text when provided', () => {
    const avatar = mount(<Avatar image="http://www.google.be" alt="google" />);
    expect(avatar.find('img').props().src).toBe('http://www.google.be');
    expect(avatar.find('img').props().alt).toBe('google');
});