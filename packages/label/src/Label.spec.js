import React from 'react';
import { mount, shallow } from 'enzyme';
import Label from './Label';

describe('Label', () => {
    describe('.type', () => {
        it('should apply the correc class for type - primary', () => {
            const label = mount(<Label type="primary" />);
            expect(label.getDOMNode().className).toContain('a-label--primary');
        });

        it('should apply the correc class for type - secondary', () => {
            const label = mount(<Label type="secondary" />);
            expect(label.getDOMNode().className).toContain('a-label--secondary');
        });

        it('should apply the correc class for type - success', () => {
            const label = mount(<Label type="success" />);
            expect(label.getDOMNode().className).toContain('a-label--success');
        });

        it('should apply the correc class for type - warning', () => {
            const label = mount(<Label type="warning" />);
            expect(label.getDOMNode().className).toContain('a-label--warning');
        });

        it('should apply the correc class for type - danger', () => {
            const label = mount(<Label type="danger" />);
            expect(label.getDOMNode().className).toContain('a-label--danger');
        });
    });

    it('should apply the classname if provided', () => {
        const label = mount(<Label className="test" />);
        expect(label.getDOMNode().className).toContain('test');
    });

    it('should apply the style if provided', () => {
        const labelStyle = { color: 'green' };
        const label = mount(<Label style={labelStyle} />);
        expect(label.getDOMNode().style).toHaveProperty('color');
    });

    it('should insert the children', () => {
        const label = mount(<Label>test</Label>);
        expect(label.text()).toBe('test');
    });

    it('should set the data-qa attribute', () => {
        const label = shallow(<Label qa="id-1234">test</Label>);
        expect(label.props()).toHaveProperty('data-qa', 'id-1234');
    });
});