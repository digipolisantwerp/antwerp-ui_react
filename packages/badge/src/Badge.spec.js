import Badge from './Badge';
import { mount } from 'enzyme';
import React from 'react';

describe('Badge', () => {
    it('should apply the class - primary', () => {
        const badge = mount(<Badge type="primary" />);
        expect(badge.getDOMNode().className).toContain('a-badge--primary');
    });

    it('should apply the class - secondary', () => {
        const badge = mount(<Badge type="secondary" />);
        expect(badge.getDOMNode().className).toContain('a-badge--secondary');
    });

    it('should apply the class - success', () => {
        const badge = mount(<Badge type="success" />);
        expect(badge.getDOMNode().className).toContain('a-badge--success');
    });

    it('should apply the class - warning', () => {
        const badge = mount(<Badge type="warning" />);
        expect(badge.getDOMNode().className).toContain('a-badge--warning');
    });

    it('should apply the class - danger', () => {
        const badge = mount(<Badge type="danger" />);
        expect(badge.getDOMNode().className).toContain('a-badge--danger');
    });

    it('should apply the style object', () => {
        const badgeStyle = { color: 'green' };
        const badge = mount(<Badge style={badgeStyle} />);
        expect(badge.getDOMNode().style).toHaveProperty('color');
    });

    it('should combine the classNames', () => {
        const badge = mount(<Badge className="bleh" />);
        expect(badge.getDOMNode().className).toContain('bleh');
    });
});