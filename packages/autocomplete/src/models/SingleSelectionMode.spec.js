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
    component.state.results = [{label: "LABEL", value: 'VALUE'}];
    mode.handleDefaultValue('VALUE');
    expect(component.inputField.value).toEqual('LABEL')
  });

  it('handle incorrect defaultValue', () => {
    component.state.results = [{label: "LABEL", value: 'VALUE'}];
    mode.handleDefaultValue(['VALUE', 'VALUE2']);
    expect(component.inputField.value).toEqual('LABEL')
  });
});
