import Avatar from './Avatar';
import { mount } from 'enzyme';
import React from 'react';

describe('Avatar', () => {
    it('should apply the correct className for size - small', () => {
        const avatar = mount(<Avatar size="small">test</Avatar>);
        expect(avatar.getDOMNode().className).toContain("a-avatar--small");
    });

    it('should apply the correct className for size - medium', () => {
        const avatar = mount(<Avatar size="medium">test</Avatar>);
        expect(avatar.getDOMNode().className).toContain("a-avatar--medium");
    });

    it('should apply the correct className for size - large', () => {
        const avatar = mount(<Avatar size="large">test</Avatar>);
        expect(avatar.getDOMNode().className).toContain("a-avatar--large");
    });

    it('should apply the style object', () => {
        const avatarStyle = { color: 'green' };
        const avatar = mount(<Avatar style={avatarStyle} />);
        expect(avatar.getDOMNode().style).toHaveProperty('color');
    });

    it('should show the icon when provided', () => {
        const avatar = mount(<Avatar icon="bell" />);
        expect(avatar.find('i').props().className).toContain('fa-bell');
    });

    it('should show the letters when provided', () => {
        const avatar = mount(<Avatar letter="SP" />);
        expect(avatar.find('span').text()).toBe('SP');
    });

    it('should show the image and alt text when provided', () => {
        const avatar = mount(<Avatar image="http://www.google.be" alt="google" />);
        expect(avatar.find('img').props().src).toBe('http://www.google.be');
        expect(avatar.find('img').props().alt).toBe('google');
    });
});