import React from 'react';
import { shallow } from 'enzyme';

import Hero from './Hero';

describe('Hero', () => {
    test('Hero is rendered correctly', () => {
      const component = shallow(<Hero />);
      expect(component.exists('.u-text-center'));
    });
});
