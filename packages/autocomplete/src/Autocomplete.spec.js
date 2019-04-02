import React from 'react';
import { shallow, mount } from 'enzyme';
import Autocomplete from './Autocomplete';
//scrollIntoView not supported by Jest...
window.HTMLElement.prototype.scrollIntoView = function() {};

 describe('Autocomplete', () => {

  const data = [
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"}
  ]


  test('Autocomplete dropdown is not rendered when 0 items are passed', () => {
    const component = shallow(<Autocomplete />);
     expect(component.find('.m-flyout__content ul')[0]).toBeUndefined();
  });

  test('Autocomplete dropdown is rendered when items are passed', () => {
    const component = shallow(<Autocomplete items={data} />);
    expect(component.exists('.m-flyout__content'));
    expect(component.find('.m-selectable-list li')).toHaveLength(data.length);
  });

  test('Autocomplete is closed by default', () => {
    const component = shallow(<Autocomplete items={data} />);
    expect(component.state('open')).toBe(false);
  });


  test('Autocomplete opens after ArrowDown in input field', () => {
    const autocompleteWrapper = mount(<Autocomplete items={data} label="Testlabel" />)
    const autocompleteInputWrapper = autocompleteWrapper.find('input')
    
    autocompleteInputWrapper.simulate('keyDown', { key : 'ArrowDown', keyCode: 40, which: 40 })
    expect(autocompleteWrapper.state('open')).toBe(true)
  })

  test('Autocomplete closes after pressing Enter and correct value is assigned', () => {
    const autocompleteWrapper = mount(<Autocomplete items={data} label="Testlabel" />)
    const autocompleteInputWrapper = autocompleteWrapper.find('input')

    autocompleteWrapper.setState({ open: true })
    autocompleteInputWrapper.simulate('keyDown', { key : 'ArrowDown', keyCode: 40, which: 40 })
    autocompleteInputWrapper.simulate('keyDown', { key : 'ArrowDown', keyCode: 40, which: 40 })
    autocompleteInputWrapper.simulate('keyDown', { key : 'Enter', keyCode: 13, which: 13 })
    expect(autocompleteWrapper.state('open')).toBe(false)
    expect(autocompleteWrapper.state('inputValue')).toBe("Brussel")
  })
 });