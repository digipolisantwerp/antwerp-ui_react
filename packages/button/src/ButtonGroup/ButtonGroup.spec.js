import ButtonGroup from './ButtonGroup';
import { mount } from 'enzyme';
import React from 'react';

describe('ButtonGroup', () => {

    it('should wrap the children in a buttongroup', () => {
        const buttonGroup = mount(<ButtonGroup><span>test</span></ButtonGroup>);
        expect(buttonGroup.getDOMNode().className).toContain('m-button-group');
    });

    test('should apply the style object', () => {
        const buttonGroupStyle = { color: 'green' };
        const buttonGroup = mount(<ButtonGroup style={buttonGroupStyle} />);
        expect(buttonGroup.getDOMNode().style).toHaveProperty('color');
    });
});