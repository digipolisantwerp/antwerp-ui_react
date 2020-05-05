import type {ISearchMode, Item} from "../types";

export class AsyncSearchMode implements ISearchMode {
  callback;

  constructor(callback: (value: string) => Array<Item>) {
    this.callback = callback;
  }

  search(value: string): Promise<Array<Item>> {
    return new Promise((resolve, reject) => {
      try {
        this.callback(value, (results) => {
          resolve(results);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  reset() {
    // Do nothing
  }
}
