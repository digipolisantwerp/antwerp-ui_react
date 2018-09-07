import React from 'react';
import { shallow } from 'enzyme';
import CardActions from './CardActions';

describe('CardActions', () => {
    test('CardActions renders actions correctly', () => {
        const actions = 'Project';
        const component = shallow(<CardActions>{actions}</CardActions>);

        expect(component.find('div').text()).toEqual(actions);
    });
});
