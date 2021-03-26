import React from 'react';
import { mount } from 'enzyme';
import CardIcon from './CardIcon';

describe('CardIcon', () => {

    test('CardIcon renders children correctly', () => {
        const icon = 'lock';
        const component = mount(<CardIcon icon={icon} />);

        expect(component.find(`.ai-${icon}`).exists()).toEqual(true);
    });
});
