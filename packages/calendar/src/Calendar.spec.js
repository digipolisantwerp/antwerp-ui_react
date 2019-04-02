import Calendar from './Calendar';

import { mount } from 'enzyme';
import React from 'react';

describe('Calendar', () => {
	const format = "DD/MM/YYYY";

	it('should set active date if provided', () => {
		const calendar = mount(<Calendar activeDate={"23/01/1991"} format={format} />);
		expect(calendar.state('activeDate').format(format)).toBe("23/01/1991");
	});

	it('should set default format as DD/MM/YYYY  if not provided', () => {
		const calendar = mount(<Calendar />);
		expect(calendar.props().format).toBe('DD/MM/YYYY');
	});

	it('should trigger the onChange', () => {
		const mock = jest.fn();
		const calendar = mount(<Calendar onChange={mock} activeDate={"23/01/1991"} format={format} />);
		const day = calendar.find('Day');
		day.find('button').first().simulate('click');
		expect(mock).toHaveBeenCalled();
	});

});