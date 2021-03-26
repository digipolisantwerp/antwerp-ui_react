import React from 'react';
import { mount, shallow } from 'enzyme';
import Icon from './Icon';

describe('Icon', () => {
    it('should apply the correct icon-name', () => {
        const icon = mount(<Icon name="danger" />);
        expect(icon.getDOMNode().className).toContain("ai-danger");
    });

    it('should apply the correct className', () => {
        const icon = mount(<Icon className="test" />);
        expect(icon.getDOMNode().className).toContain("test");
    });

    it('should set the data-qa attribute', () => {
        const icon = shallow(<Icon name="test" qa="id-1234" />);
        expect(icon.find('.ai').props()).toHaveProperty('data-qa', 'id-1234');
    });
});
