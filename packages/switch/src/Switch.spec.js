import Switch from './Switch';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('Switch', () => {

	it('should add the required class if provided', () => {
		const switchButton = mount(<Switch required={true} />);
		expect(switchButton.getDOMNode().className).toContain('a-input is-required');
	});

	it('should not add the required class if not provided', () => {
		const switchButton = mount(<Switch/>);
		expect(switchButton.getDOMNode().className).not.toContain("is-required");
	});

	it('should add labelFalse when labelFalse provided', () => {
		const switchButton = mount(<Switch labelFalse={"Wrong"} />);
		expect(switchButton.find('.a-switch__label').get(0).props.children).toContain('Wrong');
	});

	it('should add labelTrue when labelTrue provided', () => {
		const switchButton = mount(<Switch labelTrue={"Right"} />);
		expect(switchButton.find('.a-switch__label').get(0).props.children).toContain('Right');
	});

	it('should trigger the onClick', () => {
		const mock = jest.fn();
		const switchButton = mount(<Switch onClick={mock} />);
		switchButton.find('[type="checkbox"]').simulate('change');
		expect(mock).toHaveBeenCalled();
	});

	it('onClick should trigger change checked state', () => {
		const mock = jest.fn();
		const switchButton = mount(<Switch onClick={mock} checked={false} />);
		switchButton.find('[type="checkbox"]').simulate('change');
		expect(switchButton.state('checked')).toBe(true);
	});

	it('should set the data-qa attribute', () => {
		const switchButton = shallow(<Switch qa="id-1234" />);
		expect(switchButton.props()).toHaveProperty('data-qa', 'id-1234');
	});
});
