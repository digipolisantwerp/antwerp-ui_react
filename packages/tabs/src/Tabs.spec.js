import React from 'react';
import { shallow, mount } from 'enzyme';
import Tabs from './Tabs';

const tabs = [
  { name: 'Organisms', target: '/organisms', active: true },
  { name: 'Molecules', target: '/molecules' },
  { name: 'Atoms', target: '/atoms', disabled: true },
  { name: 'Quarks', target: '/quarks' },
];

describe('Tabs', () => {
  test('Tabs are not rendered when 0 items are passed', () => {
    const component = shallow(<Tabs />);

    expect(component.find('.m-nav-tabs')[0]).toBeUndefined();
  });

  test('Tabs are rendered when items are passed', () => {
    const component = shallow(<Tabs items={tabs} />);

    expect(component.find('.m-nav-tabs').exists()).toEqual(true);
    expect(component.find('.m-nav-tabs li')).toHaveLength(4);
  });

  test('Tabs can be aligned to the left', () => {
    const component = shallow(<Tabs align="left" items={tabs} />);

    expect(component.find('.m-nav-tabs').hasClass('m-nav-tabs--left')).toEqual(true);
  });

  test('Tabs can be aligned to the right', () => {
    const component = shallow(<Tabs align="right" items={tabs} />);

    expect(component.find('.m-nav-tabs').hasClass('m-nav-tabs--right')).toEqual(true);
  });

  test('Tabs are aligned to the left by default', () => {
    const component = shallow(<Tabs items={tabs} />);

    expect(component.find('.m-nav-tabs').hasClass('m-nav-tabs--left')).toEqual(true);
  });


  test('Tabs can be marked as active', () => {
    const component = mount(<Tabs items={tabs} />);

    expect(component.find('.m-nav-tabs li a').at(0).hasClass('is-active')).toEqual(true);
  });

  test('Tabs can be marked as disabled', () => {
    const component = mount(<Tabs items={tabs} />);

    expect(component.find('.m-nav-tabs li a').at(2).hasClass('is-disabled')).toEqual(true);
  });

  test('Tabs contain a data-qa attribute', () => {
    const component = shallow(<Tabs qa="id-1234" items={tabs} />).find('.m-nav-tabs');

    expect(component.props()).toHaveProperty('data-qa', 'id-1234');
  });
});
