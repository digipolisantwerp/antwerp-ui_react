import React, { Component } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

import Flyout from '../../flyout/src/Flyout';
import TextField from '../../form/src/TextField';

type InputStates = "success" | "warning" | "error";

type Props = {
  items?: array,
  children?: any,
  open?: boolean,
  label: string,
  id: string,
  defaultValue?: string,
  noResults?: string,
  onSelection?: Function,
  onChange?: Function,
  loading?: boolean,
  disabled?: boolean,
  state?: InputStates,
  /** Qa id */
  qa?: string,
};

class Autocomplete extends Component<Props> {
  constructor(props) {
    super(props);
    const {open} = this.props;

    this.state = {
      open: open || false,
      inputValue: '',
      results: [],
      cursor: 0,
      searchVal: ''
    };
  }

  static defaultProps = {
    open: false,
    onSelection: () => {},
    onChange: () => {},
    noResults: 'No results were found'
  }

  componentDidMount() {
    const { defaultValue, items } = this.props;

    this.setState({
      results: items
    });

    if (!defaultValue) {
      return;
    }

    this.handleDefaultValue(defaultValue, items)
  }

  componentWillReceiveProps(nextProps) {
    const { searchVal, inputValue } = this.state;

    // This is necessarry since it takes around 1/10th of a second before the props have propagated.
    setTimeout(() => this.search(searchVal), 100);

    if (inputValue === nextProps.defaultValue) {
      this.handleDefaultValue(nextProps.defaultValue, nextProps.items)
    }
  }

  handleDefaultValue(defaultValue, items) {
    this.props.onSelection(defaultValue);
    this.props.onChange(defaultValue);

    const foundItems = items.filter(item => item.value === defaultValue);
    if (!foundItems.length > 0) {
      this.search(defaultValue);
      this.selectOption(defaultValue);
      return;
    }

    this.search(foundItems[0].label);
    this.selectOption(foundItems[0].label);
  }

  handleChange = ( e ) => {
    this.setState({
      open: true,
      searchVal: e.target.value
    });
    this.updateInputValue(e);
    this.props.onChange(e.target.value);
    this.search(e.target.value);
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
    if (e.target.value === "") {
      this.setState({
        results: this.props.items
      });
    }
  }

  search = (val) => {
    const { items } = this.props;
    if (!val) {
      return this.setState({
        results: items,
        cursor: 0
      });
    }

    let matches = items.filter(item => item.label.toLowerCase().includes(val.toLowerCase()));
    this.setState({
      results: matches,
      cursor: 0
    });
  }

  handleClick = ( e ) => {
    this.props.onSelection(e.target.dataset.value);
    this.props.onChange(e.target.dataset.value);
    this.selectOption(e.target.innerText);
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open })
  }

  handleFlyoutState = (isOpen) => {
    this.setState({ open: isOpen });
  }

  handleKeyPress = (e) => {
    const { results, cursor } = this.state
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

  selectOption = (val) => {
    this.closeTrigger();
    this.setState({
      inputValue: val,
      open: false
    });
  }

  renderItems = (item, index) => {
    var liClasses = classNames({
      'm-selectable-list__item': true,
      'm-selectable-list__item--active': this.state.cursor === index
    });
    return (
      <li key={item.value} data-value={item.value} data-label={item.label} className={liClasses} onClick={this.handleClick} ref={(item) => { this['item_' + index] = item }}>
        {item.label}
      </li>
    );
  }

  handleCloseTrigger = (closeTrigger) => {
    this.closeTrigger = closeTrigger;
  }

  render() {
    const { items, noResults, loading, disabled, state, qa } = this.props;
    const { results, open } = this.state;

    return (
      items && (
        <div>
          <Flyout
            trigger={
              <TextField
                name="autocomplete"
                className="autocomplete"
                id={this.props.id}
                label={this.props.label}
                value={this.state.inputValue}
                onChange={this.handleChange}
                onClick={this.toggleOpen}
                onKeyDown={this.handleKeyPress}
                autoComplete="off"
                loading={!!loading}
                disabled={disabled}
                state={state}
                data-qa={qa}
              />
            }
            triggerClose={this.handleCloseTrigger}
            onStateChange={this.handleFlyoutState}
            open={open}
            >
              {results.length == 0 ? (
                <p className="u-margin-xs u-text-light u-text-center">{noResults}</p>
              ): (
                <ul className="m-selectable-list m-selectable-list--no-border">
                  {results.map((item, index) => this.renderItems(item, index))}
                </ul>
              )}
          </Flyout>
        </div>
      )
    )
  }
}

export default Autocomplete;
