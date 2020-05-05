import type {IMode, Item} from "./types";
import * as React from 'react';

export class SingleSelectionMode implements IMode {
  component;

  constructor(component: React.Component) {
    this.component = component;
  }

  select(item: Item): void {
    this.component.props.onSelection && this.component.props.onSelection(item.value);
    this.component.formControl.setValue(item.label);
    this.component.closePane();
  }

  search(value: string): void {
    const {items} = this.component.props;
    if (!value) {
      return this.component.setState({
        ...this.component.state,
        results: items,
        cursor: 0
      });
    }

    let matches = items.filter(item => item.label.toLowerCase().includes(value.toLowerCase()));
    this.component.setState({
      ...this.component.state,
      results: matches,
      cursor: 0
    });
  }
}
