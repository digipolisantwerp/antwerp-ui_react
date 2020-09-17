import {SyncSearchMode} from "./SyncSearchMode";
import Autocomplete from "..";
import * as sinon from 'sinon';

describe('Sync Search Mode Test', () => {
  let mode: SyncSearchMode;
  let component;
  beforeEach(() => {
    component = sinon.createStubInstance(Autocomplete);
    mode = new SyncSearchMode(component);
  });

  describe('Search', () => {
    it('should return all items when item is selected and search is cleared', () => {
      const items = [
        {
          label: 'First',
          value: 'a'
        },
        {
          label: 'Second',
          value: 'b'
        },
        {
          label: 'Third',
          value: 'c'
        }
      ];
      component.state = {
        results: [items[0]]
      };
      component.props = {
        items: [...items]
      };
      return mode.search('')
        .then((results) => {
          expect(results.length).toBe(3);
          expect(results).toEqual(items);
        });
    })
  });
});
