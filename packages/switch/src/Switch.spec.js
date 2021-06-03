import Switch from './Switch';
import { mount, shallow } from 'enzyme';
import React from 'react';
import * as sinon from 'sinon';

describe('Switch', () => {

	it('should add labelFalse when labelFalse provided', () => {
		const switchButton = shallow(<Switch labelFalse={"Wrong"} />);
		expect(switchButton.find('.a-switch__off').get(0).props.children).toContain('Wrong');
	});

	it('should add labelTrue when labelTrue provided', () => {
		const switchButton = shallow(<Switch labelTrue={"Right"} />);
		expect(switchButton.find('.a-switch__on').get(0).props.children).toContain('Right');
	});

	it('should trigger the onClick', () => {
		const mock = sinon.stub();
		const switchButton = shallow(<Switch onClick={mock} />);
		switchButton.find('.a-switch__button').simulate('click');
		expect(mock.calledOnce).toBe(true);
	});

	it('onClick should trigger change checked state', () => {
		const switchButton = shallow(<Switch/>);
		expect(switchButton.state('checked')).toBe(false);
		switchButton.find('.a-switch__button').simulate('click');
		switchButton.update();
		expect(switchButton.state('checked')).toBe(true);
	});

	it('should set the data-qa attribute', () => {
		const switchButton = shallow(<Switch qa="id-1234" />);
		expect(switchButton.props()).toHaveProperty('data-qa', 'id-1234');
	});
});
