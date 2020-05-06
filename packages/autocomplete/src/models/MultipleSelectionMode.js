import type {ISelectionMode, Item} from "../types";
import * as React from 'react';

export class MultipleSelectionMode implements ISelectionMode {
  component;

  constructor(component: React.Component) {
    this.component = component;
  }

  select(item: Item): void {
    if (this.component.state.selection.findIndex(s => s.value === item.value) > -1)
      return;

    const selection = this.component.state.selection;
    selection.push(item);
    this.component.setState({
      ...this.component.state,
      selection
    });
    this.component.props.onSelection && this.component.props.onSelection(selection.map(i => i.value));
    if (this.component.inputField)
      this.component.inputField.value = '';
    this.component.closePane();
  }

  unselect(item: Item): void {
    const selection = this.component.state.selection;
    const index = selection.findIndex(s => s.value === item.value);
    if (index > -1) {
      selection.splice(index, 1);
    }
    this.component.setState({
      selection
    });
    this.component.props.onSelection && this.component.props.onSelection(selection.map(i => i.value));
    this.component.searchMode.reset();
  }

  getSelection() {
    return this.component.state.selection;
  }
}
