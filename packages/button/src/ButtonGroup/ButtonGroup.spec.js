import ButtonGroup from './ButtonGroup';
import { mount, shallow } from 'enzyme';
import React from 'react';

describe('ButtonGroup', () => {

    it('should wrap the children in a buttongroup', () => {
        const buttonGroup = mount(<ButtonGroup><span>test</span></ButtonGroup>);
        expect(buttonGroup.getDOMNode().className).toContain('m-button-group');
    });

    it('should wrap the children in a vertical button group', () => {
        const buttonGroup = mount(<ButtonGroup direction="vertical"><span>test</span></ButtonGroup>);
        expect(buttonGroup.getDOMNode().className).toContain('m-button-group');
        expect(buttonGroup.getDOMNode().className).toContain('m-button-group--vertical');
    });

    test('should apply the style object', () => {
        const buttonGroupStyle = { color: 'green' };
        const buttonGroup = mount(<ButtonGroup style={buttonGroupStyle} />);
        expect(buttonGroup.getDOMNode().style).toHaveProperty('color');
    });

    test('should set the data-qa attribute', () => {
        const buttonGroup = shallow(<ButtonGroup qa="id-1234" />);
        expect(buttonGroup.props()).toHaveProperty('data-qa', 'id-1234');
    });
});