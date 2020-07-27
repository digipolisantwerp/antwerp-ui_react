import {SingleSelectionMode} from "./SingleSelectionMode";
import Autocomplete from "../component/Autocomplete.jsx";
import * as sinon from 'sinon';

let component;
let mode;

function beforeEach() {
  component = sinon.createStubInstance(Autocomplete);
  component.state = {selection: []};
  component.props = {};
  component.inputField = {}
  mode = new SingleSelectionMode(component);
}

describe('Single Selection Mode', () => {
  test('handle defaultValue', () => {
    beforeEach();
    component.state.results = [{label: "LABEL", value: 'VALUE'}]
    mode.handleDefaultValue('VALUE');
    expect(component.inputField.value).toEqual('LABEL')
  });

  test('handle incorrect defaultValue', () => {
    beforeEach();
    component.state.results = [{label: "LABEL", value: 'VALUE'}]
    mode.handleDefaultValue(['VALUE', 'VALUE2']);
    expect(component.inputField.value).toEqual('LABEL')
  });
});
