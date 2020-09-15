import {AsyncSearchMode} from "./AsyncSearchMode";
import Autocomplete from "..";
import * as sinon from 'sinon';

describe('Async Search Mode Test', () => {
  let component: Autocomplete;

  beforeEach(() => {
    component = sinon.createStubInstance(Autocomplete);
    component.setState = sinon.stub();
    component.selectionMode = {
      handleDefaultValue: sinon.stub()
    };
  });

  describe('default value initialization', () => {
    it('should handle a single default value upon initialization', () => {
      const mode = new AsyncSearchMode(component);
      component.state = {
        defaultValue: 'A'
      };
      sinon.stub(mode, 'search').withArgs('A').returns(Promise.resolve([{label: 'First', value: 'A'}]));
      return mode.initialize()
        .then(() => {
          // The results of the search should have been set in the state
          expect(component.selectionMode.handleDefaultValue.withArgs(['A']).calledOnce).toBe(true);
          // And we should ask the selection mode to handle the default value
          expect(component.setState.withArgs({results: [{label: 'First', value: 'A'}]}).calledOnce).toBe(true);
        })
    });
    it('should handle an array of default values upon initialization', () => {
      const mode = new AsyncSearchMode(component);
      component.state = {
        defaultValue: ['A', 'B']
      };
      sinon.stub(mode, 'search').withArgs('A').returns(Promise.resolve([{label: 'First', value: 'A'}]));
      sinon.stub(mode, 'search').withArgs('B').returns(Promise.resolve([{label: 'Second', value: 'B'}]));
      return mode.initialize()
        .then(() => {
          // The results of the search should have been set in the state
          expect(component.selectionMode.handleDefaultValue.withArgs(['A', 'B']).calledOnce).toBe(true);
          // And we should ask the selection mode to handle the default value
          expect(component.setState.withArgs({
            results: [{label: 'First', value: 'A'}, {label: 'Second', value: 'B'}]
          }).calledOnce).toBe(true);
        });
    });
  });
});
