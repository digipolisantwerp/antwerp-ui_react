import Calendar from './Calendar';

import { mount } from 'enzyme';
import React from 'react';
import Moment from 'moment';

describe('Calendar', () => {
	const format = "DD/MM/YYYY";

	it('should set active date if provided', () => {
		const calendar = mount(<Calendar activeDate={"23/01/1991"} format={format} />);
		expect(calendar.state('activeDate').format(format)).toBe("23/01/1991");
	});

	it('should set today as active date if not provided', () => {
		const calendar = mount(<Calendar format={format} />);
		expect(calendar.state('activeDate').format(format)).toBe(Moment().format(format));
	});

	it('should set default format as DD/MM/YYYY  if not provided', () => {
		const calendar = mount(<Calendar />);
		expect(calendar.state('activeDate').format(format)).toBe(Moment().format(format));
	});

	it('should trigger the onChange', () => {
		const mock = jest.fn();
		const calendar = mount(<Calendar onChange={mock} activeDate={"23/01/1991"} format={format} />);
		const day = calendar.find('Day');
		day.find('button').first().simulate('click');
		expect(mock).toHaveBeenCalled();
	});

});