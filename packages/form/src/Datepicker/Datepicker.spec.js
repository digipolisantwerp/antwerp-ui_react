import Datepicker from './Datepicker';

import { mount } from 'enzyme';
import React from 'react';
import Moment from 'moment';

describe('Datepicker', () => {
	const format = "DD/MM/YYYY";

	it('should set active date if provided', () => {
		const datepicker = mount(<Datepicker activeDate={"23/01/1991"} format={format} />);
		expect(datepicker.state('activeDate').format(format)).toBe("23/01/1991");
	});

	it('should set today as active date if not provided', () => {
		const datepicker = mount(<Datepicker format={format} />);
		expect(datepicker.state('activeDate').format(format)).toBe(Moment().format(format));
	});

	it('should set default format as DD/MM/YYYY  if not provided', () => {
		const datepicker = mount(<Datepicker />);
		expect(datepicker.state('activeDate').format(format)).toBe(Moment().format(format));
	});

	it('should set state open true when toggleCalendar is called', () => {
		const datepicker = mount(<Datepicker open={false} />);
		const appInstance = datepicker.instance();
		appInstance.toggleCalendar();
		expect(datepicker.state('open')).toBe(true);
	});
});