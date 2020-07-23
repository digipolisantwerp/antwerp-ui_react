import type {ISelectionMode, Item} from "../types";
import * as React from 'react';

export class MultipleSelectionMode implements ISelectionMode {
  component;

  constructor(component: React.Component) {
    this.component = component;
  }

  handleDefaultValue(defaultValues: Array): void {
    if (!defaultValues || !Array.isArray(defaultValues)) {
      return;
    }

    const selection = defaultValues.map((defaultValue) => (this.component.state.results || []).find((result) => result.value === defaultValue));

    if (!selection || !Array.isArray(selection) || selection.length === 0) {
      return;
    }

    this.component.setState({
      selection
    });
    this.component.inputField.value = '';
  }

  select(item: Item): void {
    if (this.component.state.selection.findIndex(s => s.value === item.value) > -1)
      return;

    const selection = this.component.state.selection;
    selection.push(item);
    this.component.setState({
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
    if (index === -1)
      return;

    selection.splice(index, 1);
    this.component.setState({
      selection
    });
    this.component.props.onSelection && this.component.props.onSelection(selection.map(i => i.value));

    if (this.component.searchMode)
      this.component.searchMode.reset();
  }

  getSelection() {
    return this.component.state.selection;
  }
}
