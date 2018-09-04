import React, { Component } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

import Flyout from '../../flyout/src/Flyout';
import TextField from '../../form/src/TextField';

type Props = {
  items?: object,
  children?: any,
  open?: boolean
};

class Autocomplete extends Component<Props> {

  constructor(props) {
    super(props);
    const {open} = this.props;

    this.state = {
      open: open || false,
      inputValue: '',
      results: [],
      cursor: 0
    };
    this.data = this.props.items;
  }

  static defaultProps = {
    open: false
  }

  componentDidMount() {
    this.setState({
      results: this.data
    });
  }

  handleChange = ( e ) => {
    this.setState({
      open: true
    });
    this.updateInputValue(e)
    this.search(e.target.value)
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
    if (e.target.value === "") {
      this.setState({
        open: false,
        results: this.data
      });
    }
  }

  search = (val) => {
    if (val) {
      var items = this.data;
      let matches = items.filter(item => item.label.toLowerCase().includes(val));
      this.setState({
        results: matches,
        cursor: 0
      });
    }
  }

  handleClick = ( e ) => {
    this.setState({
      inputValue: e.target.innerText,
      open: false
    });
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
      this.setState({
        inputValue: results[cursor].label,
        open: false
      });
    }
  }

  scrollToItem = () => {
    const domNode = ReactDOM.findDOMNode(this['item_' + this.state.cursor]);
    domNode.scrollIntoView(false)
  }

  renderItems = (item, index) => {
    var liClasses = classNames({
      'm-selectable-list__item': true,
      'm-selectable-list__item--active': this.state.cursor === index
    });
    return (
      <li key={item.value} className={liClasses} onClick={this.handleClick} ref={(item) => { this['item_' + index] = item }}>
        {item.label}
      </li>
    );
  }

  render() {
    return (
      <div>
        <Flyout toggle={
          <TextField
            name="autocomplete"
            className="autocomplete"
            value={this.state.inputValue}
            onChange={this.handleChange}
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
    );
  }
}

export default Autocomplete;