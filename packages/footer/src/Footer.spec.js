import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
    it('should apply the style', () => {
        const footerStyle = { color: 'green'};
        const footer = mount(<Footer style={footerStyle}/>);
        expect(footer.getDOMNode().style).toHaveProperty('color');
    });

    it('should apply the children to the footer label', () => {
        const footer = mount(<Footer>test</Footer>);
        expect(footer.find('.o-footer__label').text()).toBe('test');
    });

    it('should return in a footer element', () => {
        const footer = mount(<Footer />);
        expect(footer.getDOMNode().tagName).toBe('FOOTER');
    });

    it('should set the data-qa attribute', () => {
        const footer = mount(<Footer qa="id-1234" />).find('.o-footer');
        expect(footer.props()).toHaveProperty('data-qa', 'id-1234');
    });
});