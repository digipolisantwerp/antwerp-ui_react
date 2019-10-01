import Icon from './Icon';
import { mount, shallow } from 'enzyme';
import React from 'react';

describe('Icon', () => {
    it('should apply the correct icon-name', () => {
        const icon = mount(<Icon name="danger" />);
        expect(icon.getDOMNode().className).toContain("fa-danger");
    });

    it('should apply the correct className', () => {
        const icon = mount(<Icon className="test" />);
        expect(icon.getDOMNode().className).toContain("test");
    });

    it('should return span element if span is true', () => {
        const icon = shallow(<Icon name="test" span />);
        expect(icon.type()).toBe('span');
    });

    it('should return i element if span is false', () => {
        const icon = shallow(<Icon name="test" />);
        expect(icon.type()).toBe('i');
    });

    it('should set the data-qa attribute', () => {
        const icon = shallow(<Icon qa="id-1234" />);
        expect(icon.props()).toHaveProperty('data-qa', 'id-1234');
    });
});