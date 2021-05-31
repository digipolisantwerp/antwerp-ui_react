import Button from './Button';
import { mount, shallow } from 'enzyme';
import React from 'react';

describe('Button', () => {

    it('should add the title if provided', () => {
        const button = mount(<Button title="test" />);
        expect(button.getDOMNode().title).toBe('test');
    });

    it('should add the className if provided', () => {
        const button = mount(<Button className="test" />);
        expect(button.getDOMNode().className).toContain("test");
    });

    it('should add the style if provided', () => {
        const buttonStyle = { color: "green" };
        const button = mount(<Button style={buttonStyle} />);
        expect(button.getDOMNode().style).toHaveProperty('color');
    });

    it('should set the htmltype if provided', () => {
        const button = mount(<Button htmlType="submit" />);
        expect(button.getDOMNode().type).toBe('submit');
    });

    it('should set the data-qa attribute', () => {
        const button = shallow(<Button qa="id-1234" />);
        expect(button.props()).toHaveProperty('data-qa', 'id-1234');
    });

    describe('.negative', () => {
        it('should add the negative class if negative is true', () => {
            const button = mount(<Button negative={true} />);
            expect(button.getDOMNode().className).toContain('a-button-negative');
        });

        it('should not add the negative class when negative is false', () => {
            const button = mount(<Button negative={false} />);
            expect(button.getDOMNode().className).not.toContain('a-button-negative');
        });

        it('should not add the negative class when negative is undefined', () => {
            const button = mount(<Button />);
            expect(button.getDOMNode().className).not.toContain('a-button-negative');
        });
    });

    describe('.disabled', () => {
        it('should add the disabled property if disabled is true', () => {
            const button = mount(<Button disabled={true} />);
            expect(button.getDOMNode().disabled).toBe(true);
        });

        it('should not add the disabled property when disabled is false', () => {
            const button = mount(<Button disabled={false} />);
            expect(button.getDOMNode().disabled).toBe(false);
        });

        it('should not add the disabled property when disabled is undefined', () => {
            const button = mount(<Button />);
            expect(button.getDOMNode().disabled).toBe(false);
        });
    });

    describe('.outline', () => {
        it('should add the outline class if outline is true', () => {
            const button = mount(<Button outline={true} />);
            expect(button.getDOMNode().className).toContain('a-button-outline');
        });

        it('should not add the outline class when outline is false', () => {
            const button = mount(<Button outline={false} />);
            expect(button.getDOMNode().className).not.toContain('a-button-outline');
        });

        it('should not add the outline class when outline is undefined', () => {
            const button = mount(<Button />);
            expect(button.getDOMNode().className).not.toContain('a-button-outline');
        });
    });

    describe('.block', () => {
        it('should add the block class if block is true', () => {
            const button = mount(<Button block={true} />);
            expect(button.getDOMNode().className).toContain('a-button--block');
        });

        it('should not add the block class when block is false', () => {
            const button = mount(<Button block={false} />);
            expect(button.getDOMNode().className).not.toContain('a-button--block');
        });

        it('should not add the block class when block is undefined', () => {
            const button = mount(<Button />);
            expect(button.getDOMNode().className).not.toContain('a-button--block');
        });
    });

    describe('.size', () => {
        it('should add the correct button size - tiny', () => {
            const button = mount(<Button size="tiny" />);
            expect(button.getDOMNode().className).toContain('a-button--tiny');
        });

        it('should add the correct button size - small', () => {
            const button = mount(<Button size="small" />);
            expect(button.getDOMNode().className).toContain('a-button--small');
        });

        it('should add the correct button size - large', () => {
            const button = mount(<Button size="large" />);
            expect(button.getDOMNode().className).toContain('a-button--large');
        });
    });

    describe('.type', () => {
        it('should add the correct button type - secondary', () => {
            const button = mount(<Button type="secondary" />);
            expect(button.getDOMNode().className).toContain('a-button--secondary');
        });

        it('should add the correct button type - success', () => {
            const button = mount(<Button type="success" />);
            expect(button.getDOMNode().className).toContain('a-button--success');
        });

        it('should add the correct button type - warning', () => {
            const button = mount(<Button type="warning" />);
            expect(button.getDOMNode().className).toContain('a-button--warning');
        });

        it('should add the correct button type - danger', () => {
            const button = mount(<Button type="danger" />);
            expect(button.getDOMNode().className).toContain('a-button--danger');
        });

        it('should add the correct button type - transparent', () => {
            const button = mount(<Button type="transparent" />);
            expect(button.getDOMNode().className).toContain('a-button--transparent');
        });
    });

    describe('.icon', () => {
        it('should add `has-icon` if an icon is provided', () => {
            const button = mount(<Button icon="ai-alarm-bell" />);
            expect(button.getDOMNode().className).toContain('has-icon');
        });

        it('should add the icon if an icon is provided', () => {
            const button = mount(<Button icon="ai-alarm-bell" />);
            expect(button.find('span').props().className).toContain('ai-alarm-bell');
        });
    });

    describe('.icon-left', () => {
        it('should add `has-icon-left` if an icon is provided', () => {
            const button = mount(<Button iconLeft="ai-alarm-bell" />);
            expect(button.getDOMNode().className).toContain('has-icon-left');
        });

        it('should add the icon if an icon is provided', () => {
            const button = mount(<Button iconLeft="ai-alarm-bell" />);
            expect(button.find('span').props().className).toContain('ai-alarm-bell');
        });
    });

    describe('.icon-right', () => {
        it('should add `has-icon-right` if an icon is provided', () => {
            const button = mount(<Button iconRight="ai-alarm-bell" />);
            expect(button.getDOMNode().className).toContain('has-icon-right');
        });

        it('should add the icon if an icon is provided', () => {
            const button = mount(<Button iconRight="ai-alarm-bell" />);
            expect(button.find('span').props().className).toContain('ai-alarm-bell');
        });
    });

    describe('.on-click', () => {
        it('should trigger the onClick', () => {
            const mock = jest.fn();
            const button = mount(<Button onClick={mock} />);
            button.simulate('click');
            expect(mock).toHaveBeenCalled();
        });
    });
});
