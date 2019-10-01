import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Header', () => {
    it('should apply the style', () => {
        const headerStyle = { color: 'green'};
        const header = mount(<Header style={headerStyle}/>);
        expect(header.getDOMNode().style).toHaveProperty('color');
    });

    it('it should apply the className', () => {
        const header = mount(<Header className="bleh"/>);
        expect(header.getDOMNode().className).toContain('bleh');
    });

    it('should apply the children', () => {
        const header = mount(<Header>test</Header>);
        expect(header.text()).toBe('test');
    });

    it('should return in a footer element', () => {
        const header = mount(<Header />);
        expect(header.getDOMNode().tagName).toBe('HEADER');
    });

    it('should set the data-qa attribute', () => {
        const header = shallow(<Header qa="id-1234" />);
        expect(header.props()).toHaveProperty('data-qa', 'id-1234');
    });
});