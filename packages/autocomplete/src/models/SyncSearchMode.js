import type {ISearchMode, Item} from "../types";

export class SyncSearchMode implements ISearchMode {
  component;

  constructor(component) {
    this.component = component;
  }

  initialize() {
    this.component.selectionMode.handleDefaultValue(this.component.props.defaultValue);
    return Promise.resolve();
  }

  search(value: string): Promise<Array<Item>> {
    if (!value) {
      return Promise.resolve(this.component.props.items);
    }

    // Find matches in remaining items
    let matches = items.filter(item => item.label.toLowerCase().includes(value.toLowerCase()));
    return Promise.resolve(matches);
  }

  reset(): void {
    let items = this.component.props.items;
    const selection = this.component.state.selection || [];
    items = items.filter(item => !selection.find(s => s.value === item.value));
    this.component.setState({
      results: items
    })
  }
}
