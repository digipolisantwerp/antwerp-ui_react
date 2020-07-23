import type {ISelectionMode, Item} from "../types";
import * as React from 'react';

export class SingleSelectionMode implements ISelectionMode {
  component;
  selectedItem: Item = null;

  constructor(component: React.Component) {
    this.component = component;
  }

  handleDefaultValue(defaultValue: string): void {
    if (!defaultValue || !this.component.inputField) {
      return;
    }

    const item = (this.component.state.results || []).find((result) => result.value === defaultValue);
    if (!item) {
      return;
    }

    if (this.component.inputField) {
      this.component.inputField.value = item.label;
    }
  }

  select(item: Item): void {
    this.selectedItem = item;
    this.component.props.onSelection && this.component.props.onSelection(item.value);
    if (this.component.inputField)
      this.component.inputField.value = item.label;
    this.component.closePane();
  }

  getSelection() {
    return this.selectedItem ? [this.selectedItem] : [];
  }
}
