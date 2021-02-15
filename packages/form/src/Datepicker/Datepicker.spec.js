import Datepicker from './Datepicker';

import { mount, shallow } from 'enzyme';
import React from 'react';
import Moment from 'moment';

describe('Datepicker', () => {
	const format = "DD/MM/YYYY";

	it('should set active date if provided', () => {
		const datepicker = mount(<Datepicker activeDate={"23/01/1991"} format={format} />);
		expect(datepicker.state('activeDate').format(format)).toBe("23/01/1991");
  });

  it('should set to reset the date through a prop', () => {
    const datepicker = mount(<Datepicker activeDate={""} />);
		expect(datepicker.state('activeDate')).toBe(null);
  });

	it('should set default format as DD/MM/YYYY  if not provided', () => {
		const datepicker = mount(<Datepicker />);
		expect(datepicker.props().format).toBe('DD/MM/YYYY');
	});

	it('should set state open true when toggleCalendar is called', () => {
		const datepicker = mount(<Datepicker open={false} />);
		const appInstance = datepicker.instance();
		appInstance.toggleCalendar();
		expect(datepicker.state('open')).toBe(true);
	});

	it('should set the data-qa attribute', () => {
		const datepicker = shallow(<Datepicker qa="id-1234" />);
		expect(datepicker.props()).toHaveProperty('data-qa', 'id-1234');
  });



});
