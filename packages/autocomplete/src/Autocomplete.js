import React, { Component } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

import Flyout from '../../flyout/src/Flyout';
import TextField from '../../form/src/TextField';

type Props = {
  items?: array,
  children?: any,
  open?: boolean,
  label: string,
  defaultValue?: string,
  onSelection?: Function,
  onChange?: Function,
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
    this.data = this.props.items;
  }

  static defaultProps = {
    open: false,
    onSelection: () => {},
    onChange: () => {}
  }

  componentDidMount() {
    const { defaultValue, items } = this.props;
    this.setState({
      results: this.data
    });

    if (!defaultValue) {
      return;
    }

    this.props.onSelection(defaultValue);
    this.props.onChange(defaultValue);

    const foundItems = items.filter(item => item.value === defaultValue);
    if (!foundItems.length > 0) {
      return this.selectOption(defaultValue);
    }
    
    this.selectOption(foundItems[0].label);
  }

  componentWillReceiveProps(props) {
    const { searchVal } = this.state;
    this.search(searchVal);
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
    if (val) {
      var items = this.data;
      let matches = items.filter(item => item.label.toLowerCase().includes(val.toLowerCase()));
      this.setState({
        results: matches,
        cursor: 0
      });
    }
  }

  handleClick = ( e ) => {
    this.props.onSelection(e.target.dataset.value);
    this.props.onChange(e.target.dataset.value);
    this.selectOption(e.target.innerText);
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open })
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

  render() {
    const { items } = this.props;

    return (
      items && (
        <div>
          <Flyout
            trigger={
              <TextField
                name="autocomplete"
                className="autocomplete"
                label={this.props.label}
                value={this.state.inputValue}
                onChange={this.handleChange}
                onClick={this.toggleOpen}
                onKeyDown={this.handleKeyPress}
              />
            }
            open={this.state.open}
            >
              <ul className="m-selectable-list m-selectable-list--no-border">
                {this.state.results.map((item, index) => this.renderItems(item, index))}
              </ul>
          </Flyout>
        </div>
      )
    )
  }
}

export default Autocomplete;