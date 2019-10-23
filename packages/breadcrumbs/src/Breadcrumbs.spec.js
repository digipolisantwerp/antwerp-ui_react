import React from 'react';
import { shallow, mount } from 'enzyme';
import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumbs', () => {

  const breadcrumbs = [
    { name: 'Organisms', target: '/organisms' },
    { name: 'Molecules', target: '/molecules' },
    { name: 'Atoms', target: '/atoms' },
    { name: 'Quarks', target: '/quarks' },
  ];

  test('Breadcrumbs are not rendered when 0 items are passed', () => {
    const component = shallow(<Breadcrumbs />);

    expect(component.find('.m-breadcrumbs')[0]).toBeUndefined();
  });

  test('Breadcrumbs are rendered when items are passed', () => {
    const component = shallow(<Breadcrumbs items={breadcrumbs} />);

    expect(component.find('.m-breadcrumbs').exists()).toEqual(true);
    expect(component.find('.m-breadcrumbs li')).toHaveLength(4);
  });

  test('Last breadcrumb is not rendered as a link', () => {
    const component = shallow(<Breadcrumbs items={breadcrumbs} />);

    expect(component.find('.m-breadcrumbs li:last-child').childAt(0).type()).not.toEqual('a');
  });

  test('Breadcrumbs with a `target` are rendered as a link', () => {
    const breadcrumbs = [
      { name: 'Organisms', target: '/organisms' },
      { name: 'Molecules', target: '/molecules' },
      { name: 'Atoms', target: '/atoms' },
      { name: 'Quarks' },
    ];

    const component = mount(<Breadcrumbs items={breadcrumbs} />);

    expect(component.find('.m-breadcrumbs li a')).toHaveLength(3);
  });

  test('Breadcrumbs without a `target` are not rendered as a link', () => {
    const breadcrumbs = [
      { name: 'Organisms', target: '/organisms' },
      { name: 'Molecules' },
      { name: 'Atoms' },
      { name: 'Quarks' },
    ];

    const component = mount(<Breadcrumbs items={breadcrumbs} />);

    expect(component.find('.m-breadcrumbs li a')).toHaveLength(1);
  });

  test('Breadcrumbs contains a data-qa attribute', () => {
    const component = mount(<Breadcrumbs items={breadcrumbs} qa="id-1234" />).find('.m-breadcrumbs');

    expect(component.props()).toHaveProperty('data-qa', 'id-1234');
  });
});
