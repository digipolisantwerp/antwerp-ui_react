import React, {Component} from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import FlyoutContent from '../../../flyout-button/src/FlyoutContent';
import {MultipleSelectionMode} from "../models/MultipleSelectionMode";
import {SingleSelectionMode} from "../models/SingleSelectionMode";
import TagList, {TagListItem} from "../../../taglist";
import {SyncSearchMode} from "../models/SyncSearchMode";
import {AsyncSearchMode} from "../models/AsyncSearchMode";
import {fromEvent, Subject} from "rxjs";
import {debounceTime, filter, map, takeUntil, tap} from 'rxjs/operators';
import InputLabel from "../../../form/src/InputLabel";
import Icon from "../../../icon";
import {stateClasses} from "../../../form/src/TextField/TextField";

import './Autocomplete.scss';

const ARROW_KEYS = ["ArrowUp", "ArrowDown", "Enter"];
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
  defaultValue?: string | string[];
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
  /**
   * Allows the user to create their own values on the fly
   */
  allowNewEntry?: boolean;
  newEntryText?: string;
  onNewEntry?: (label: string) => Promise<Item>;
};

type IState = {
  open: boolean;
  results: Array<Item>;
  cursor: number;
  selection: Array<Item>;
  isLoading: boolean;
}

class Autocomplete extends Component<Props, IState> {
  state = {
    open: this.props.open || false,
    results: this.props.items || [],
    cursor: 0,
    selection: [],
    defaultValue: this.props.defaultValue || ''
  }

  inputField: HTMLInputElement;
  selectionMode = this.props.multipleSelect ? new MultipleSelectionMode(this) : new SingleSelectionMode(this);
  searchMode = this.props.asyncItems ? new AsyncSearchMode(this) : new SyncSearchMode(this);

  destroy$ = new Subject();

  componentDidMount() {
    const change$ = fromEvent(this.inputField, 'keyup').pipe(
      takeUntil(this.destroy$),
      filter(e => !ARROW_KEYS.some(k => k === e.key)),
      map(() => this.inputField.value),
      debounceTime(200),
      tap(value => {
        if (!this.state.open && value && value.length > 0) {
          this.openPane();
        }
        this.props.onChange && this.props.onChange(value);
        this.search(value);
      })
    );

    const handleArrowKeys$ = fromEvent(this.inputField, 'keyup').pipe(
      filter(e => ARROW_KEYS.some(k => e.key === k)),
      takeUntil(this.destroy$),
      tap(e => {
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
          if (cursor === 0) {
            this.handleNewEntry(this.inputField.value)
          }

          this.selectOption(results[cursor - 1])
        }
      })
    );

    // Start the show!
    this.selectionMode.handleDefaultValue(this.props.defaultValue)
    handleArrowKeys$.subscribe();
    change$.subscribe();
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
    this.search('');
  }


  search(value: string): void {
    this.searchMode.search(value).then((results: Array<Item>) => {
      this.setState({
        results,
        cursor: this.props.allowNewEntry ? 0 : 1
      });
    });
  }

  handleNewEntry = (label: string): void => {
    if (!this.props.onNewEntry) {
      return this.selectionMode.select({ label, value: label });
    }

    this.props.onNewEntry(label)
      .then((newItem) => {
        this.selectionMode.select(newItem);
      });
  }

  scrollToItem = () => {
    const domNode = ReactDOM.findDOMNode(this['item_' + this.state.cursor]);
    domNode.scrollIntoView(false)
  }

  selectOption(item: Item) {
    if (!!item)
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

  componentWillUnmount() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getInput() {
    return (
      <input id={this.props.id}
             type="text"
             autoComplete="off"
             disabled={this.props.disabled}
             ref={ref => this.inputField = ref}
             defaultValue={this.state.defaultValue}
             data-qa={this.props.qa}
             {...this.props.state}
             onBlur={() => this.closePane()}
             onFocus={() => this.openPane()}
      />
    );
  }

  focusOnInput() {
    if (!this.inputField)
      return;

    this.inputField.focus();
  }

  render() {
    const {noResults, loading, state, qa, allowNewEntry, newEntryText} = this.props;
    const {results, open, isLoading} = this.state;

    const flyoutClasses = classNames(
      'm-flyout',
      'm-flyout--full',
      'm-autocomplete',
      {
        'is-open': open,
        'is-multiple-select': !!this.props.multipleSelect
      }
    );

    const inputClass = classNames(
      'a-input',
      {
        'has-icon-right': this.props.loading || this.state.isLoading,
        'has-icon-left': this.props.showSearchIcon,
        [`${stateClasses[state]}`]: !!state,
      }
    );

    const wrapperClasses = classNames(
      'a-input__wrapper',
      {
        'has-focus': !!this.inputField && this.inputField === document.activeElement && !!this.props.multipleSelect
      }
    )

    const newEntryClasses = classNames({
      'm-selectable-list__item': true,
      'm-selectable-list__item--active': this.state.cursor === 0
    });

    return (
      <div>
        <div className={flyoutClasses}>
          <div className={inputClass} data-qa={qa}>
            <InputLabel htmlFor={this.props.id}>{this.props.label}</InputLabel>
            <div className={wrapperClasses} onClick={() => this.focusOnInput()}>
              {this.props.multipleSelect && <TagList>
                {this.state.selection.map(s => {
                  return (
                    <TagListItem closable={true} onClick={() => this.selectionMode.unselect(s)} key={s.value}
                                 value={s.label}/>)
                })}
                <li className="m-tag has-input">
                  {this.props.multipleSelect && this.getInput()}
                </li>
              </TagList>}
              {!this.props.multipleSelect && this.getInput()}
              {this.props.showSearchIcon && <Icon name="search"/>}
              {(loading || isLoading) && <span className="fa a-spinner a-spinner--sm"/>}
            </div>
          </div>
          <FlyoutContent hasPadding={false}>
            {(results.length === 0 && !allowNewEntry) || (results.length === 0 && allowNewEntry && (this.inputField && !this.inputField.value)) ? (
              <p className="u-margin-xs u-text-light u-text-center">{noResults || "No Results"}</p>
            ) : (
              <ul className="m-selectable-list m-selectable-list--no-border">
                {allowNewEntry && this.inputField && this.inputField.value && (
                  <li className={newEntryClasses} onClick={() => this.handleNewEntry(this.inputField.value)} ref={(item) => {
                    this['item_' + 0] = item
                  }}>
                    {newEntryText || "Create new entry for:"} {this.inputField.value}
                  </li>
                )}
                {results.map((item, index) => this.renderItems(item, index + 1))}
              </ul>
            )}
          </FlyoutContent>
        </div>
      </div>
    )
  }
}

export default Autocomplete;
