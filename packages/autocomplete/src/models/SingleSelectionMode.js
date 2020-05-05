import type {ISelectionMode, Item} from "../types";
import * as React from 'react';

export class SingleSelectionMode implements ISelectionMode {
  component;

  constructor(component: React.Component) {
    this.component = component;
  }

  select(item: Item): void {
    this.component.props.onSelection && this.component.props.onSelection(item.value);
    this.component.formControl.setValue(item.label);
    this.component.closePane();
  }
}
