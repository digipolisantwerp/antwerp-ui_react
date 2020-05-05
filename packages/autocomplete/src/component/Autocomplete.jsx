import React, {Component} from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

import FlyoutContent from '../../../flyout-button/src/FlyoutContent';
import TextField from '../../../form/src/TextField';
import {FormControl} from "react-reactive-form";
import {MultipleSelectionMode} from "../models/MultipleSelectionMode";
import {SingleSelectionMode} from "../models/SingleSelectionMode";
import TagList, {TagListItem} from "../../../taglist";
import {SyncSearchMode} from "../models/SyncSearchMode";
import {AsyncSearchMode} from "../models/AsyncSearchMode";

type InputStates = "success" | "warning" | "error";
type Item = { label: string; value: string };
type Props = {
  items?: Array<Item>;
  asyncItems?: (query: string, callback: (results: Array<Item>) => void) => void;
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
  selection: Array<Item>;
}

class Autocomplete extends Component<Props, IState> {
  state = {
    open: this.props.open || false,
    results: this.props.items || [],
    cursor: 0,
    selection: []
  }

  formControl = new FormControl(this.props.defaultValue || '');
  selectionMode = this.props.multipleSelect ? new MultipleSelectionMode(this) : new SingleSelectionMode(this);
  searchMode = this.props.asyncItems ? new AsyncSearchMode(this.props.asyncItems) : new SyncSearchMode(this);

  componentDidMount() {
    this.formControl.valueChanges.subscribe(value => {
      this.props.onChange && this.props.onChange(value);
      this.search(value);
    });
    if (this.props.defaultValue) {
      const item = this.props.items.find(i => i.value === this.props.defaultValue);
      this.formControl.setValue((item && item.label) || this.props.defaultValue);
    }
  }

  closePane() {
    this.setState({
      open: false
    });
  }

  openPane() {
    this.setState({
      open: true
    });
  }

  handleKeyPress(e) {
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
      this.selectOption(results[cursor])
    }
    if (e.key === "Backspace") {
      this.search(this.state.inputValue);
    }
  }

  search(value: string): void {
    this.searchMode.search(value).then((results: Array<Item>) => {
      this.setState({
        results,
        cursor: 0
      });
    });
  }

  scrollToItem = () => {
    const domNode = ReactDOM.findDOMNode(this['item_' + this.state.cursor]);
    domNode.scrollIntoView(false)
  }

  selectOption(item: Item) {
    this.selectionMode.select(item);
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
    const {noResults, loading, disabled, state, qa} = this.props;
    const {results, open} = this.state;

    const flyoutClasses = classNames(
      'm-flyout',
      'm-flyout--full',
      {
        'is-open': open,
      }
    );

    return (
      <div>
        <div className={flyoutClasses}>
          <TagList>
            {this.state.selection.map(s => {
              return (
                <TagListItem closable={true} onClick={() => this.selectionMode.unselect(s)} key={s.value}
                             value={s.label}/>)
            })}
          </TagList>
          <TextField
            {...this.formControl.handler()}
            name="autocomplete"
            className="autocomplete"
            id={this.props.id}
            label={this.props.label}
            onKeyDown={(e) => this.handleKeyPress(e)}
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
              <p className="u-margin-xs u-text-light u-text-center">{noResults || "No Results"}</p>
            ) : (
              <ul className="m-selectable-list m-selectable-list--no-border">
                {results.map((item, index) => this.renderItems(item, index))}
              </ul>
            )}
          </FlyoutContent>
        </div>
      </div>
    )
  }
}

export default Autocomplete;
