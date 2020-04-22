import * as React from 'react';
import Flyout from "../../flyout";
import Button from "../../button";
import {Checkbox} from "../../form";

import './SearchFilter.scss';
import {FormControl} from "react-reactive-form";

type IProps = {
  /**
   * Array of label, value pairs that will be available to multi-select.
   */
  choices: Array<{ label: string, value: string }>;
  /**
   * Callback that is called whenever a selection is made by the user. The callback receives an
   * array as parameter, containing the values of the selected items.
   */
  onSelection: (Array<string>) => void;
  /**
   * Translations for labels. As of now only supports one parameter: btnOpen
   */
  translations: {
    btnOpen: string
  }
}

export class SearchFilter extends React.Component<IProps> {
  state = {
    flyoutState: 'closed',
    selection: []
  };

  controls: Array<FormControl> = [];

  componentDidMount(): void {
    if (!this.props.choices) {
      return;
    }
    this.controls = this.props.choices.map((choice) => {
      const control = new FormControl();
      control.valueChanges.subscribe(e => this.checked(choice.value, e));
      return control;
    });
  }

  onSelection(s): void {
    if (this.props.onSelection) {
      this.props.onSelection(s);
    }
  }

  checked(value: string, isChecked: boolean) {
    if (!value)
      return;
    if (isChecked && !this.state.selection.some(v => v === value)) {
      const selection = [...this.state.selection, value];
      this.setState({
          ...this.state,
          selection
        }
      );
      this.onSelection(selection);
    } else {
      const index = this.state.selection.findIndex(v => v === value);
      if (index > -1) {
        const selection = [...this.state.selection];
        selection.splice(index, 1);
        this.setState({
          ...this.state,
          selection
        })
        this.onSelection(selection);
      }
    }
  }

  flyoutStateUpdate(event) {
    this.setState({
      flyoutState: event ? 'closed' : 'open'
    });
  }

  render() {
    return (
      <div className="m-search-filter">
        <Flyout trigger={
          <Button type={this.state.selection.length > 0 ? 'default' : 'transparent'}
                  outline={this.state.selection.length === 0}
                  iconRight={this.state.flyoutState === 'closed' ? 'angle-down' : 'angle-up'}>
            {(this.props.translations && this.props.translations.btnOpen) || 'Search'}
            {this.state.selection && this.state.selection.length > 0 && ('(' + this.state.selection.length + ')')}
          </Button>
        } onStateChange={(e) => this.flyoutStateUpdate(e)}>
          <ul className="m-selectable-list m-selectable-list--no-border">
            {this.props.choices && this.controls && this.controls.length && this.props.choices.map((choice, index) => {
              return (
                <li key={index} className="m-selectable-list__item">
                  <Checkbox
                    label={choice.label}
                    id={"search-filter-checkbox-" + choice.value}
                    name={"search-filter"}
                    {...this.controls[index].handler()}/>
                </li>
              );
            })}
          </ul>
        </Flyout>
      </div>
    )
  }
}
