import Alert from './Alert';
import { mount, shallow } from 'enzyme';
import React from 'react';

test('should apply the correct className - danger', () => {
    const alert = mount(<Alert type="danger">test</Alert>);
    expect(alert.getDOMNode().className).toContain("danger");
});

test('should apply the correct className - success', () => {
    const alert = mount(<Alert type="success">test</Alert>);
    expect(alert.getDOMNode().className).toContain("success");
});

test('should apply the correct className - warning', () => {
    const alert = mount(<Alert type="warning">test</Alert>);
    expect(alert.getDOMNode().className).toContain("warning");
});

test('should set the title', () => {
    const alert = shallow(<Alert title="test">Test</Alert>);
    expect(alert.find('h5').text()).toBe('test');
});

test('should set type on the close button', () => {
    const alert = shallow(<Alert type="warning" closable={true}>Test</Alert>);
    expect(alert.find('Button').props().type).toBe('warning');
});

test('should call the preventDefault()', () => {
    const alert = shallow(<Alert type="warning" closable={true}>Test</Alert>);
    const cbMock = jest.fn();
    alert.find('Button').simulate('click', { preventDefault: cbMock });
    expect(cbMock).toBeCalled();
});