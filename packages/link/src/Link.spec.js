import React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from './Link';

describe('Link', () => {
  test('Link renders default as an <a>-tag', () => {
    const component = shallow(<Link href="/home">This is a link</Link>);

    expect(component.find('a').exists()).toEqual(true);
  });

  test('Link renders children correctly', () => {
    const text = 'This is a link';
    const component = shallow(<Link href="/home">{text}</Link>);

    expect(component.find('a').text()).toEqual(text);
  });

  test('Link can be rendered as a custom tag', () => {
    const component = shallow(<Link href="/home" component="div">This is a faux link</Link>);

    expect(component.find('div').exists()).toEqual(true);
  });


  test('Link can be rendered as a custom component', () => {
    const customComponent = () => <span>I am a custom link</span>;

    const component = mount(<Link to="/home" component={customComponent} />);

    expect(component.find('span').exists()).toEqual(true);
  });
});
