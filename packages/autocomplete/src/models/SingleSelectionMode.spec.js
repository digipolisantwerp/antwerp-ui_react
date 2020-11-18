import {SingleSelectionMode} from "./SingleSelectionMode";
import Autocomplete from "../component/Autocomplete.jsx";
import * as sinon from 'sinon';

describe('Single Selection Mode', () => {
  let component;
  let mode;

  beforeEach(() => {
    component = sinon.createStubInstance(Autocomplete);
    component.state = {selection: []};
    component.props = {};
    component.inputField = {};
    mode = new SingleSelectionMode(component);
  });

  it('handle defaultValue', () => {
    component.state.results = [{label: "label_1", value: 'value_1'}, {label: "label_2", value: 'value_2'}];
    mode.handleDefaultValue('value_2');
    expect(component.inputField.value).toEqual('label_2')
  });

  it('handle incorrect defaultValue', () => {
    component.state.results = [{label: "label_1", value: 'value_1'}, {label: "label_2", value: 'value_2'}];
    mode.handleDefaultValue(['value_1', 'value_2']);
    expect(component.inputField.value).toEqual('label_1')
  });
});
