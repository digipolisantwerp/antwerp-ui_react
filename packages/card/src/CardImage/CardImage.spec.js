import React from 'react';
import { shallow } from 'enzyme';
import CardImage from './CardImage';

describe('TileImage', () => {
    test('TileImage renders src correctly', () => {
        const url = 'https://api.adorable.io/avatars/285/john@adorable.png';
        const component = shallow(<CardImage src={url} />);

        expect(component.find('img').filterWhere(item => item.prop('src') === url).length).toEqual(1);
    });

    test('TileImage renders alt correctly', () => {
        const url = 'https://api.adorable.io/avatars/285/john@adorable.png';
        const alt = 'John Arnold';
        const component = shallow(<CardImage src={url} alt={alt} />);

        expect(component.find('img').filterWhere(item => item.prop('alt') === alt).length).toEqual(1);
    });
});
