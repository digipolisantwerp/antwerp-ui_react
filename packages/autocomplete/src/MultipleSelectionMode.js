import type {IMode, Item} from "./types";
import * as React from 'react';

export class MultipleSelectionMode implements IMode {
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
    this.component.formControl.setValue('');
    this.component.closePane();
  }

  unselect(item: Item): void {
    const selection = this.component.state.selection;
    const index = selection.findIndex(s => s.value === item.value);
    if (index > -1) {
      selection.splice(index, 1);
    }
    this.component.setState({
      ...this.component.state,
      selection
    });
    this.component.props.onSelection && this.component.props.onSelection(selection.map(i => i.value));
  }

  search(value: string): void {
    let {items} = this.component.props;
    const selection = this.component.state.selection;
    // Remove the items that are already in our selection
    items = items.filter(item => !selection.find(s => s.value === item.value));
    if (!value) {
      return this.component.setState({
        results: items,
        cursor: 0
      });
    }

    let matches = items.filter(item => item.label.toLowerCase().includes(value.toLowerCase()));
    this.component.setState({
      results: matches,
      cursor: 0
    });
  }
}
