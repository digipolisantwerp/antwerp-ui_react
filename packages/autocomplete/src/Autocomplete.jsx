import React, {Component} from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

import FlyoutContent from '../../flyout-button/src/FlyoutContent';
import TextField from '../../form/src/TextField';
import {FormControl} from "react-reactive-form";

type InputStates = "success" | "warning" | "error";
type Item = { label: string; value: string };
type Props = {
  items?: Array<Item>;
  children?: any;
  /**
   * If true, the options flyout will be open by default
   */
  open?: boolean;
  label: string;
  id: string;
  defaultValue?: string;
  noResults?: string;
  onSelection?: (selection: Item | Array<Item>) => void;
  onChange?: Function;
  loading?: boolean;
  disabled?: boolean;
  state?: InputStates;
  /** Qa id */
  qa?: string;
  showSearchIcon?: boolean;
  /**
   * If true, this control will allow selection of multiple items,
   * listing them as tags in the control.
   */
  multipleSelect?: boolean;
};

type IState = {
  open: boolean;
  results: Array<Item>;
  cursor: number;
  searchVal: string;
}

class Autocomplete extends Component<Props, IState> {
  state = {
    open: this.props.open || false,
    results: this.props.items || [],
    cursor: 0
  }

  formControl = new FormControl(this.props.defaultValue || '');

  componentDidMount() {
    this.formControl.valueChanges.subscribe(value => {
      this.props.onChange(value);
      this.search(value);
    });
    if (this.props.defaultValue) {
      const item = this.props.items.find(i => i.value === this.props.defaultValue);
      this.formControl.setValue((item && item.label) || this.props.defaultValue);
    }
  }

  search(value: string) {
    const {items} = this.props;
    if (!value) {
      return this.setState({
        results: items,
        cursor: 0
      });
    }

    let matches = items.filter(item => item.label.toLowerCase().includes(value.toLowerCase()));
    this.setState({
      results: matches,
      cursor: 0
    });
  }

  closePane() {
    this.setState({
      ...this.state,
      open: false,
    });
  }

  openPane() {
    this.setState({
      ...this.state,
      open: true,
    });
  }

  handleFlyoutState = (isOpen) => {
    this.setState({open: isOpen});
  }

  handleKeyPress = (e) => {
    const {results, cursor} = this.state
    if (e.key === "ArrowDown" && cursor < results.length - 1) {
      this.setState({
        open: true,
        cursor: cursor + 1
      }, () => {
        this.scrollToItem()
      });
    }
    if (e.key === "ArrowUp" && cursor > 0) {
      this.setState({
        open: true,
        cursor: cursor - 1
      }, () => {
        this.scrollToItem()
      });
    }
    if (e.key === "Enter") {
      this.props.onSelection(results[cursor].value);
      this.selectOption(results[cursor].label)
    }
    if (e.key === "Backspace") {
      this.search(this.state.inputValue);
    }
  }

  scrollToItem = () => {
    const domNode = ReactDOM.findDOMNode(this['item_' + this.state.cursor]);
    domNode.scrollIntoView(false)
  }

  selectOption(item: Item) {
    this.props.onSelection && this.props.onSelection(item.value);
    this.formControl.setValue(item.label);
    this.closePane();
  }

  renderItems = (item, index) => {
    const liClasses = classNames({
      'm-selectable-list__item': true,
      'm-selectable-list__item--active': this.state.cursor === index
    });
    return (
      <li key={item.value} data-value={item.value} data-label={item.label} className={liClasses}
          onClick={() => this.selectOption(item)} ref={(item) => {
        this['item_' + index] = item
      }}>
        {item.label}
      </li>
    );
  }

  render() {
    const {items, noResults, loading, disabled, state, qa} = this.props;
    const {results, open} = this.state;

    const flyoutClasses = classNames(
      'm-flyout',
      'm-flyout--full',
      {
        'is-open': open,
      }
    );

    return (
      items && (
        <div>
          <div className={flyoutClasses}>
            <TextField
              {...this.formControl.handler()}
              name="autocomplete"
              className="autocomplete"
              id={this.props.id}
              label={this.props.label}
              onKeyDown={this.handleKeyPress}
              onBlur={() => this.closePane()}
              onFocus={() => this.openPane()}
              autoComplete="off"
              loading={!!loading}
              disabled={disabled}
              state={state}
              data-qa={qa}
              iconright={this.props.showSearchIcon && 'search'}
            />
            <FlyoutContent hasPadding={false}>
              {results.length === 0 ? (
                <p className="u-margin-xs u-text-light u-text-center">{noResults}</p>
              ) : (
                <ul className="m-selectable-list m-selectable-list--no-border">
                  {results.map((item, index) => this.renderItems(item, index))}
                </ul>
              )}
            </FlyoutContent>
          </div>
        </div>
      )
    )
  }
}

export default Autocomplete;
