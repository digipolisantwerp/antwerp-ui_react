import type {ISearchMode, Item} from "../types";

export class AsyncSearchMode implements ISearchMode {
  component;

  constructor(component) {
    this.component = component;
  }

  initialize(): Promise<void> {
    if (this.component.props && this.component.props.defaultValue && this.component.props.defaultValue.length > 0) {
      const defaultValues = Array.isArray(this.component.props.defaultValue) ? [...this.component.props.defaultValue] : [this.component.props.defaultValue];
      return Promise.all(defaultValues.map(v => this.search(v)))
        .then((results) => {
          if (!results.length) {
            return;
          }

          results = results.reduce((acc, searchResultValues) => {
            return [
              ...acc,
              ...searchResultValues.filter(r => !!r),
            ]
          }, [])

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
