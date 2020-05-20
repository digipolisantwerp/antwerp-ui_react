import type {ISelectionMode, Item} from "../types";
import * as React from 'react';

export class SingleSelectionMode implements ISelectionMode {
  component;
  selectedItem: Item = null;

  constructor(component: React.Component) {
    this.component = component;
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
