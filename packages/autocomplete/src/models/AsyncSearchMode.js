import type {ISearchMode, Item} from "../types";

export class AsyncSearchMode implements ISearchMode {
  component;

  constructor(component) {
    this.component = component;
  }

  initialize(): void {
    if (this.component.state.defaultValue && this.component.state.defaultValue.length > 0) {
      const defaultValues = Array.isArray(this.component.state.defaultValue) ? [...this.component.state.defaultValue] : [this.component.state.defaultValue];
      Promise.all(defaultValues.map(v => this.search(v)))
        .then((results) => {
          if (!results.length) {
            return;
          }
          results = results.map(r => r[0]); // flatten the array
          this.component.setState({
            results
          });
          this.component.selectionMode.handleDefaultValue(defaultValues);
        });
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
