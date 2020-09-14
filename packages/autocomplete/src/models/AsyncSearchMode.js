import type {ISearchMode, Item} from "../types";

export class AsyncSearchMode implements ISearchMode {
  component;

  constructor(component) {
    this.component = component;
    if (this.component.state.defaultValue && this.component.state.defaultValue.length > 0) {
      this.search(this.component.state.defaultValue)
        .then((results: Array<Item>) => {
          if (!results.length) {
            return;
          }
          this.component.setState({
            results
          });
          this.component.selectionMode.handleDefaultValue(this.component.state.defaultValue);
        })
    }
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
