import Alert from './Alert';
import { mount, shallow } from 'enzyme';
import React from 'react';

const typeClasses = {
	success: 'm-alert--success',
	warning: 'm-alert--warning',
	danger: 'm-alert--danger',
};

describe('Alert', () => {
    it('should apply the correct className for type - danger', () => {
      const alert = mount(<Alert type="danger">test</Alert>).find('.m-alert');
	    expect(alert.hasClass(typeClasses['danger'])).toBe(true);
    });

    it('should apply the correct className for type - success', () => {
        const alert = mount(<Alert type="success">test</Alert>).find('.m-alert');
	      expect(alert.hasClass(typeClasses['success'])).toBe(true);
    });

    it('should apply the correct className for type - warning', () => {
        const alert = mount(<Alert type="warning">test</Alert>).find('.m-alert');
	      expect(alert.hasClass(typeClasses['warning'])).toBe(true);
    });

    it('should apply the correct className', () => {
        const alert = mount(<Alert className="test">test</Alert>).find('.m-alert');
	      expect(alert.hasClass('test')).toBe(true);
    });

    it('should set the title', () => {
        const alert = shallow(<Alert title="test">Test</Alert>);
        expect(alert.find('h5').text()).toBe('test');
    });

    it('should set type on the close button', () => {
        const alert = shallow(<Alert type="warning" closable={true}>Test</Alert>);
        expect(alert.find('Button').props().type).toBe('warning');
    });

    it('should call the preventDefault()', () => {
        const alert = shallow(<Alert type="warning" closable={true}>Test</Alert>);
        const cbMock = jest.fn();
        alert.find('Button').simulate('click', { preventDefault: cbMock });
        expect(cbMock).toBeCalled();
    });

    it('should call the setState()', () => {
      const alert = shallow(<Alert type="warning" closable={true}>Test</Alert>);
      const cbMock = jest.fn();
      alert.find('Button').simulate('click', { preventDefault: cbMock });
      expect(alert.state('closed')).toBe(true)
    });

    it('should set the data-qa attribute', () => {
        const alert = mount(<Alert qa="id-1234">Test</Alert>).find('.m-alert');
        expect(alert.props()).toHaveProperty('data-qa', 'id-1234');
    });
});