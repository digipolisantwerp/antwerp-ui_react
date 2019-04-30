import React from 'react';
import { mount } from 'enzyme';
import Contact from './Contact';
import Avatar from '../../avatar';

describe('Contact', () => {

    it('should display the name if provided', () => {
        const contact = mount(<Contact name="Tom" />);
        expect(contact.find('p').text()).toBe('Tom');
    });

    it('should print the avatar if provided', () => {
        const contact = mount(<Contact avatar={<Avatar letter="TC" />} ></Contact>);
        expect(contact.find('.a-avatar__letter').text()).toBe('TC');
    });

    it('should apply the style element if provided', () => {
        const contactStyle = { color: 'green' };
        const contact = mount(<Contact style={contactStyle} />)
        expect(contact.getDOMNode().style).toHaveProperty('color');
    });

    it('should show info', () => {
        const contact = mount(<Contact name="Frank" info={(<span className="contact-role">Developer</span>)} />);
        expect(contact.find('.contact-role').text()).toBe('Developer');
    });

});