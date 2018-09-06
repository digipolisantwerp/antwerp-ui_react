import React from 'react';
import { mount, shallow } from 'enzyme';

import Modal from './Modal';

describe('Modal', () => {
  it('should have a title', () => {
    const modal = shallow(<Modal title="test" size="large" closable>Test</Modal>);
    expect(modal.find('h6').text()).toBe('test');
  });

  it('should be hidden', () => {
    const modal = mount(<Modal title="test" size="large" closable>Test</Modal>);
    expect(modal.find('.m-overlay.is-active')).toHaveLength(0);
  });

  it('should be visible', () => {
    const modal = mount(<Modal title="test" size="large" show closable>Test</Modal>);
    expect(modal.find('.m-overlay.is-active')).toHaveLength(1);
  });

  it('should be a large modal', () => {
    const modal = shallow(<Modal title="test" size="large" closable>Test</Modal>);
    expect(modal.find('.m-modal.m-modal--large')).toHaveLength(1);
  });

  it('should apply default close button style if no type was specified (in our case an empty string)', () => {
    const modal = shallow(<Modal title="test" size="large" closable>Test</Modal>);
    expect(modal.find('Button').props().type).toBe('');
  });

  it('should apply the correct style to the close button according to the passed type', () => {
    const modal = shallow(<Modal type="success" title="test" size="large" closable>Test</Modal>);
    expect(modal.find('Button').props().type).toBe('success');
  });
});
