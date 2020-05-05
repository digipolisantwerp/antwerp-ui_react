import type {ISearchMode, Item} from "../types";

export class AsyncSearchMode implements ISearchMode {
  component;

  constructor(component) {
    this.component = component;
  }

  search(value: string): Promise<Array<Item>> {
    return new Promise((resolve, reject) => {
      try {
        this.component.setState({
          isLoading: true
        });
        this.component.props.asyncItems(value, (results) => {
          resolve(results);
          this.component.setState({
            isLoading: false
          });
        });
      } catch (e) {
        this.component.setState({
          isLoading: false
        });
        reject(e);
      }
    });
  }

  reset() {
    // Do nothing
  }
}
